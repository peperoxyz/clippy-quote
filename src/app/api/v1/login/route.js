import { prisma } from "/src/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
	const { id, email, password } = await req.json();
	// 1. find user in db based on user email
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	// null, undefined, 0, [], {}
	if (!user) {
		return Response.json({ message: "user not found", status: 404 });
	}

	// jika ada
	const isPasswordMatch = await bcrypt.compare(password, user.password);

	// jika tidak match
	if (!isPasswordMatch) {
		return Response.json({ message: "password didn't match", status: 400 });
	}

	// jika match
	// authorization
	// ! Token JWT
	const payload = {
		id: user.id,
		name: user.name,
		email: user.email,
	};

	const token = jwt.sign(payload, "secret123", { expiresIn: "7d" });

	return Response.json({
		message: "login success!",
		status: 200,
		token,
	});

	// 2. matching
	// 3. authorization
}
