import { prisma } from "/src/utils/prisma";

// beda find unique dengan find first: find first -> yang paling pertama sesuai dengan filter kita. find unique: khusus yang tipe nya unique pada schema

// GET SINGLE USER BY ID
export async function GET(request, { params }) {
	const userId = Number(params.id);

	const user = await prisma.user.findFirst({
		where: {
			id: userId,
		},
	});

	return Response.json({
		message: `User with id ${userId} has successfully retreived`,
		// data: { username, email, password, avatarUrl, address },
		data: user,
	});
}

// UPDATE USER BY USER ID
export async function PATCH(request, { params }) {
	const { username, email, password, avatarUrl, address } = await request.json();

	const userId = Number(params.id);

	const updatedUser = await prisma.user.update({
		where: {
			id: userId,
		},
		data: { username, email, password, avatarUrl, address },
	});

	return Response.json({
		message: `User with id ${userId} has successfully updated`,
		data: updatedUser,
	});
}

// DELETE USER BY USER ID
export async function DELETE(request, { params }) {
	const userId = Number(params.id);

	await prisma.user.delete({
		where: {
			id: userId,
		},
	});

	return Response.json({
		message: `User with id ${userId} has successfully updated`,
	});
}
