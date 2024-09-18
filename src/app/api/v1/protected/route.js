import { prisma } from "/src/utils/prisma";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
	const headerList = headers();
	const authorization = headerList.get("authorization");
	const token = authorization.split("")[1];

	try {
		jwt.verify(token, "secret123");
		return Response.json({
			message: "It's protected data",
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return Response.json({
			message: "Unauthorized",
			status: 401,
		});
	}
}
