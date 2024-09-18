import { prisma } from "/src/utils/prisma";
import bcrypt from "bcrypt";

// GET SINGLE USER BY ID
export async function GET(_, { params }) {
	const userId = Number(params.id);

	const user = await prisma.user.findFirst({
		where: {
			id: userId,
		},
	});

	return Response.json({
		message: `User data has been successfully retreived`,
		data: user,
		status: 200,
	});
}

// UPDATE USER BY USER ID
export async function PATCH(request, { params }) {
	const { username, email, password } = await request.json();
	const userId = Number(params.id);

	// hash the password if it's being updated
	let hashedPassword;
	if (password) {
		hashedPassword = await bcrypt.hash(password, 12);
	}

	const updatedUser = await prisma.user.update({
		where: {
			id: userId,
		},
		data: { username, email, password: hashedPassword || undefined },
	});

	return Response.json({
		message: `User data has been successfully updated`,
		data: updatedUser,
	});
}

// DELETE USER BY USER ID
export async function DELETE(_, { params }) {
	const userId = Number(params.id);

	await prisma.user.delete({
		where: {
			id: userId,
		},
	});

	return Response.json({
		message: `User has been successfully deleted`,
	});
}
