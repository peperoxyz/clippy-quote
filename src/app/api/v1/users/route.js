import { prisma } from "/src/utils/prisma";

// GET USERS FROM DB
export async function GET() {
	const users = await prisma.user.findMany();
	return Response.json({ message: "users retrieved successfully", data: users, status: 200 });
}
