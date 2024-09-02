import Image from "next/image";
import { crimson_text } from "./ui/fonts";
import { CqLogo } from "./ui/cq-logo";

export default function Home() {
	return (
		<main className="flex min-h-screen  flex-col items-center justify-between p-24">
			<CqLogo />
			<p className={`${crimson_text.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
				<strong>Welcome to Clippy Quotes.</strong> This is the result of{" "}
				<a href="https://nextjs.org/learn/" className="text-blue-500">
					Devscale Assignment - Week 4
				</a>
				, made with love by Dea.
			</p>
		</main>
	);
}
