import { prisma } from "/src/utils/prisma";
import { headers } from "next/headers";

export async function POST() {
	// session checking mechanism

	// get Authorization key (contains sessionId) from headers
	const headerList = headers();
	const authorization = headerList.get("Authorization");

	const sessionId = authorization.split(" ")[1];
	console.log(sessionId);

	// delete session id di tabel session, where id nya match dengan id yang ada di authorization key ^
	await prisma.session.delete({
		where: {
			id: sessionId,
		},
	});

	return Response.json({
		message: "Logout success!",
	});
}
