import SideNav from "../ui/components/sidenav";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"; // which only works in server client, that's why we need js-cookies for the client-component to save cookies
import { prisma } from "/src/utils/prisma";

export default async function Layout({ children }) {
	// get stored cookies in the browser
	const storedCookie = cookies();
	const sessionId = storedCookie.get("sessionId")?.value;

	if (!sessionId) {
		redirect("/login");
	}

	// check in the databse, if the session from the cookie browser is valid or exist in the database
	const isSessionValid = await prisma.session.findUnique({
		where: {
			id: sessionId,
		},
	});

	if (!isSessionValid) {
		return redirect("/login");
	}
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full md:w-32  flex-none 4">
				<SideNav />
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-8 lg:p-12 relative">{children}</div>
		</div>
	);
}
