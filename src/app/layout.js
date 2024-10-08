import { Providers } from "../components/providers";
import { jost } from "./ui/fonts";
import "./ui/globals.css";

export const metadata = {
	title: "Clippy Quote - Assignment 3 | Dea",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${jost.className} antialiased bg-primary`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
