import { prisma } from "/src/utils/prisma";

// GET USERS FROM DB
export async function GET() {
	const users = await prisma.user.findMany();
	return Response.json({ message: "users retrieved successfully", data: users });
}

// POST localhost:3000/api/v1/quotes
export async function POST(req) {
	const body = await req.json();

	return Response.json({ message: "Creating new quote success", quotes: [body] });
}
