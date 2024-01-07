import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	// prevent new prismas from being made unless in production, expensive
	if (!(global as any).prisma) {
		(global as any).prisma = new PrismaClient();
	}
	prisma = (global as any).prisma;
}

export const resolvers = {
	Query: {
		habit: async (_: unknown, { id }: { id: number }) => {
			try {
				const habit = await prisma.habits.findUnique({
					where: { id },
					include: {
						logs: {
							orderBy: { createdAt: "desc" },
							select: { completed: true },
							take: 1, // only fetch most recent log
						},
					},
				});

				if (!habit) {
					throw new Error("Habit not found");
				}

				return {
					...habit,
					latestLogCompleted: habit.logs[0]?.completed ?? false,
				};
			} catch (error) {
				console.error(error);
				throw new Error("Error retrieving habit");
			}
		},
	},

	Mutation: {
		createLog: async (
			_: unknown,
			{ habitId, completed }: { habitId: number; completed: boolean }
		) => {
			try {
				const log = await prisma.log.create({
					data: {
						habitId,
						completed,
					},
					include: {
						habit: true,
					},
				});

				return {
					habit: log.habit.title
						? {
								id: log.habit.id,
								title: log.habit.title,
								latestLogCompleted: log.completed,
						  }
						: "invalid habit.",
					id: log.id,
					habitId: log.habitId,
					completed: log.completed,
				};
			} catch (error) {
				console.error(error);
				throw new Error("Error creating log");
			}
		},
	},
};
