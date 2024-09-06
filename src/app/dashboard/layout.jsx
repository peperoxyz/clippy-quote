import SideNav from "../ui/components/sidenav";

export default function Layout({ children }) {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full md:w-32  flex-none 4">
				<SideNav />
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-8 lg:p-12 relative">{children}</div>
		</div>
	);
}
