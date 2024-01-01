import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
	const response = await request.json();
	const { habitId, completed } = response;
	console.log(response);

	const result = await prisma.log.create({
		data: {
			habitId,
			completed,
		},
	});

	return NextResponse.json({ data: response });
}
