import Link from "next/link";
import { CqLogo } from "../cq-logo";
import { NavLinks } from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-0 md:py-0  border border-r-grey-dark">
			<Link className="flex h-20   items-end justify-start md:justify-center md:rounded-none rounded-md p-4 " href="/">
				<div className="w-fit md:ml-6 text-white md:w-40">
					<CqLogo />
				</div>
			</Link>
			<div className="flex grow   flex-row justify-center space-x-2 md:flex-col md:space-x-0 md:space-y-0">
				{/* <div className="hidden h-auto  grow rounded-md md:rounded-none bg-primary-light md:block"></div> */}
				<div className="flex grow   flex-row justify-center space-x-2 md:flex-col md:space-x-0 md:space-y-4">
					<NavLinks />
				</div>
				<form>
					<Link
						href={"/"}
						key="Home"
						className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-primary p-3 text-sm  font-medium hover:bg-primary-light hover:text-grey-dark md:flex-none md:justify-start md:rounded-none md:p-2 md:px-3"
					>
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</Link>
				</form>
			</div>
		</div>
	);
}
