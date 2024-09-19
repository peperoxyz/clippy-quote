import { prisma } from "/src/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
	const { username, email, password } = await req.json();

	const hashedPassword = await bcrypt.hash(password, 12);

	const newUser = await prisma.user.create({
		data: {
			username,
			email,
			password: hashedPassword,
		},
	});

	return Response.json({ data: newUser, status: 201, message: "User registered succesfully" });
}
