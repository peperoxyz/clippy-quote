import { prisma } from "/src/utils/prisma";
import { headers } from "next/headers";

export async function GET() {
	// session checking mechanism

	// get Authorization key (contains sessionId) from headers
	const headerList = headers();
	const authorization = headerList.get("Authorization");

	const sessionId = authorization.split(" ")[1];
	console.log(sessionId[1]);

	// check if there is a session data with id that have a same value with the sessionId from the headerlist
	const isSessionValid = await prisma.session.findUnique({
		where: {
			id: sessionId,
		},
	});

	// if there is not, then return that the user is unauthorized
	if (!isSessionValid) {
		return Response.json({
			message: "Unauthorized",
			status: 401,
		});
	}

	// if there is (or session is indeed valid), then return or direct to the protected data

	return Response.json("It's a protected resource");
}
