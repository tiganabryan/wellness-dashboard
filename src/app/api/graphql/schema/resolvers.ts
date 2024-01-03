import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	// Ensure the re-use of the prisma instance in development
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
	// ... other resolvers
};
