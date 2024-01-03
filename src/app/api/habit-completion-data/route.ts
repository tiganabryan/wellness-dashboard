// ROUTE: api/habit-completion-data.js

// WORK IN PROGRESS, NOT IN USE

import prisma from "../../../../prisma-client/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
// 	habitId: number;
// 	createdAt: {
// 		gte: Date;
// 	};
// 	completed: boolean;
// };

export default async function handler(request: any, response: any) {
	if (request.method === "GET") {
		const { habitId } = request.query;

		try {
			const habitLogs = await prisma.log.findMany({
				where: {
					habitId: habitId,
					createdAt: {
						gte: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // last 2 days
					},
					completed: true,
				},
			});

			response.json({
				habitLogs,
			});
		} catch (error) {
			console.error(error);
			response.status(500).json({
				error: "failed to fetch habit completion data :(",
			});
		}
	} else {
		response.status(405).end("method not allowed :/");
	}
}
