import { prisma } from "/src/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
	const { email, password } = await req.json();
	// 1. find user in db based on user email
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	// null, undefined, 0, [], {}
	if (!user) {
		return Response.json({ message: "user not found" }, { status: 404 });
	}

	// jika ada
	const isPasswordMatch = await bcrypt.compare(password, user.password);

	// jika tidak match
	if (!isPasswordMatch) {
		return Response.json({ message: "password didn't match" }, { status: 400 });
	}

	// jika match
	// authorization
	return Response.json({
		message: "login success!",
	});

	// 2. matching
	// 3. authorization
}
