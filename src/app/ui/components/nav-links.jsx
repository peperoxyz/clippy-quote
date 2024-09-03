"use client";

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	// { name: "Home", href: "/dashboard", icon: HomeIcon },
	{
		name: "Quotes",
		href: "/quotes",
		icon: DocumentDuplicateIcon,
	},
];

export const NavLinks = () => {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							"flex h-[48px] md:-mt-10 grow items-center justify-center gap-2  rounded-md md:rounded-none bg-primary p-3 text-sm font-medium hover:bg-primary-light hover:text-gray-light md:flex-none  md:p-2 md:px-3"
							// {
							// 	"bg-primary-light text-gray-dark": pathname === link.href,
							// }
						)}
					>
						<LinkIcon className="w-6" />
						{/* <p className="hidden md:block">{link.name}</p> */}
					</Link>
				);
			})}
		</>
	);
};
