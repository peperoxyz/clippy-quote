import { prisma } from "/src/utils/prisma";

export async function POST(req) {
	try {
		const body = await req.json();
		const newQuote = await prisma.quote.create({
			data: {
				userId: body.userId,
				title: body.title,
				transcript: body.transcript,
				author: body.author || null,
				resource: body.resource || null,
				categoryId: body.categoryId,
				clipId: body.clipId || null,
			},
		});
		return Response.json({
			message: "Creating new quote success",
			data: newQuote,
			status: 201,
		});
	} catch (error) {
		return Response.json({
			message: "Failed to create quote",
			data: error.message,
			status: 500,
		});
	}
}
