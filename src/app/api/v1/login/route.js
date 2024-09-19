import { prisma } from "/src/utils/prisma";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export async function POST(req) {
	/**
	 * 1. find user in db by user email
	 * 2. matching data inserted
	 * 3. authorization
	 */

	const { email, password } = await req.json();

	// 1. find user in db based on user email
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	// if user == undefined or null or 0 or false, then return error message
	if (!user) {
		return Response.json({ message: "User not found", status: 404 });
	}

	// 2. if user is not undefined, then check if password inserted is matched
	const isPasswordMatch = await bcrypt.compare(password, user.password);

	// if password is not matching, then return error message
	if (!isPasswordMatch) {
		return Response.json({ message: "Invalid credentials", status: 400 });
	}

	// if password matched or true,

	// 3. authorization
	// ! Session-Based
	const session = await prisma.session.create({
		data: {
			userId: user.id,
		},
	});

	return Response.json({
		message: "Login success!",
		status: 200,
		sessionId: session.id,
	});

	/**  ! Token-Based (JWT)

	// payload yang akan dikirimkan as response
	const payload = {
		id: user.id,
		name: user.name,
		email: user.email,
	};

	const token = jwt.sign(payload, "secret123", { expiresIn: "7d" });

	return Response.json({
		message: "Login success!",
		status: 200,
		token,
	});

	*/
}
