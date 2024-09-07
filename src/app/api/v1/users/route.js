import { prisma } from "/src/utils/prisma";

// GET USERS FROM DB
export async function GET() {
	const users = await prisma.user.findMany();
	return Response.json({ message: "users retrieved successfully", data: users });
}

// CREATE NEW USER
export async function POST(request) {
	const { username, email, password, avatarUrl, address } = await request.json();

	const newUser = await prisma.user.create({
		data: {
			username,
			email,
			password,
			avatarUrl,
			address,
		},
	});

	return Response.json({ message: "Creating new user success", data: newUser });
}
