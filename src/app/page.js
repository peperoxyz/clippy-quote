"use client";

import Image from "next/image";
import { crimson_text } from "./ui/fonts";
import WelcomeBg from "../assets/images/welcome-bg.png";
import { CqLogoLight } from "./ui/cq-logo-light";
import Link from "next/link";

import toast from "react-hot-toast";
import { useState } from "react";

export default function Home() {
	const [loading, setLoading] = useState(false);

	return (
		<main className="relative min-h-screen">
			<Image src={WelcomeBg} alt="background-image-home" layout="fill" objectFit="cover" className="z-[-1]" />
			<div className="absolute top-[30%] left-12">
				<CqLogoLight />
				<div className="w-full">
					<h1 className={`${crimson_text.className} text-3xl sm:text-5xl md:text-7xl text-white font-semibold mt-3`}>
						Clip, Quote, <br /> & Contemplate
					</h1>
				</div>
				<div className="font-light md:text-xl mt-3 lg:text-2xl text-white max-w-[50%]">
					Transform YouTube clipped videos into valuable insights with <b className="font-bold bg-[#EE5353]">ClippyQuote</b>. Clip your favorites, curate them with ease, and contemplate their meaning—all in one sleek platform.
				</div>
				<Link href={"/quotes"} key="Quotes">
					<button
						onClick={() => {
							setLoading(true);
							toast.success("Success!");
						}}
						className="mt-5 font-medium border py-2 px-4 border-white text-lg text-white rounded-[6px] bg-none hover:bg-white hover:text-red-600"
					>
						{loading ? "Loading..." : "Start Here"}
					</button>
				</Link>
			</div>
		</main>
	);
}
