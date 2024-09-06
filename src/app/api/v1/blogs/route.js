import { prisma } from "/src/utils/prisma";

export async function GET() {
	const posts = await prisma.post.findMany();
	return Response.json({ message: "Getting posts success", posts: posts });
}
