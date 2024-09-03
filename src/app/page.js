import Image from "next/image";
import { crimson_text } from "./ui/fonts";
import WelcomeBg from "../assets/images/welcome-bg.png";
import { CqLogoLight } from "./ui/cq-logo-light";
import Link from "next/link";

export default function Home() {
	return (
		<main className="relative min-h-screen min-w-full">
			<Image src={WelcomeBg} alt="background-image-home" className="object-cover h-screen flex flex-col justify-center" />
			<div className="absolute top-[30%] pl-12">
				<CqLogoLight />
				<div className="w-full">
					<h1 className={`${crimson_text.className} text-3xl sm:text-5xl md:text-7xl text-white font-semibold mt-3`}>
						Clip, Quote, <br /> & Contemplate
					</h1>
				</div>
				<div className="font-light md:text-xl mt-3 lg:text-2xl text-white w-1/2">
					Transform YouTube clipped videos into valuable insights with <b className="font-bold bg-[#EE5353]">ClippyQuote</b>. Clip your favorites, curate them with ease, and contemplate their meaning—all in one sleek platform.
				</div>
				<Link href={"/quotes"} key="Quotes">
					<button className="mt-5 font-medium border py-2 px-4 border-white text-lg text-white rounded-[6px] bg-none hover:bg-white  hover:text-red-600">Start Here</button>
				</Link>
			</div>
		</main>
		// <main className="flex min-h-screen  flex-col items-center justify-between p-24">
		// 	<CqLogo />
		// 	<p className={`${crimson_text.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
		// 		<strong>Welcome to Clippy Quotes.</strong> This is the result of{" "}
		// 		<a href="https://nextjs.org/learn/" className="text-blue-500">
		// 			Devscale Assignment - Week 4
		// 		</a>
		// 		, made with love by Dea.
		// 	</p>
		// </main>
	);
}
