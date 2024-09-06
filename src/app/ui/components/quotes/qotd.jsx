"use client";

import { CqLogo } from "../../cq-logo";
import { Sparkle } from "../../sparkle";
import { crimson_text } from "../../fonts";
import YoutubeIcon from "/src/assets/icons/youtube-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { quotesAtom } from "./quote-atom";
import { useAtom, useAtomValue } from "jotai";
import clsx from "clsx";

export const Qotd = () => {
	const qotd = useAtomValue(quotesAtom);

	const categoryBadgeBgClass = clsx({
		"bg-[#FFA986]": qotd.category === "Relationship",
		"bg-[#9DE9F8]": qotd.category === "Mindset and Beliefs",
		"bg-[#FFCA71]": qotd.category === "Weight Loss",
		"bg-[#CEB6FF]": qotd.category === "Problem Solving",
		"bg-[#C0CF75]": qotd.category === "Good Career",
		hidden: !["Relationship", "Mindset and Beliefs", "Weight Loss", "Problem Solving", "Good Career"].includes(qotd.category),
	});
	const boxShadowBgClass = clsx({
		"shadow-[#FFA986]": qotd.category === "Relationship",
		"shadow-[#9DE9F8]": qotd.category === "Mindset and Beliefs",
		"shadow-[#FFCA71]": qotd.category === "Weight Loss",
		"shadow-[#CEB6FF]": qotd.category === "Problem Solving",
		"shadow-[#C0CF75]": qotd.category === "Good Career",
		hidden: !["Relationship", "Mindset and Beliefs", "Weight Loss", "Problem Solving", "Good Career"].includes(qotd.category),
	});

	if (!qotd) {
		return (
			<div>
				<div className="flex gap-5 bg-primary-light items-center">
					<CqLogo />
					<h2 className={`${crimson_text.className} text-[30px] font-semibold text-grey-dark  `}>Quote Of The Day</h2>
				</div>
				<div className="mt-10 text-grey-dark shadow-[#FFA986] shadow-lg bg-primary p-8 lg:px-12 lg:py-10 relative">
					<div className="w-fit px-4 py-2 top-0 rounded-md text-primary-light absolute -mt-5 bg-[#FFA986]">Mindset and Beliefs</div>
					<div className={`${crimson_text.className} text-xl md:text-2xl font-bold text-grey-dark capitalize`}>When something worries you, stop.</div>
					<div className="flex gap-1 items-center">
						<Image src={YoutubeIcon} alt="clip-quotes-logo-image" width={25} height={25} />
						<p className=" capitalize">ThePrimeagen</p>
					</div>
					<div className=" md:text-lg mt-3 text-grey-[#464646] font-light lg:leading-[2rem] md:w-full ">
						<span>
							&quot;You've solved problems in the past. You're gonna solve this one too. You started to learn how to program knowing nothing about programming, and now you're doing it fulltime. Just think about how far you've
							come, and how many problems you've solved.&quot;
						</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="flex gap-5 items-center">
				<CqLogo />
				<h2 className={`${crimson_text.className} text-[30px] font-semibold text-grey-dark  `}>Quote Of The Day</h2>
			</div>
			<div className={`${boxShadowBgClass} mt-10 text-grey-dark shadow-lg bg-primary p-8 lg:px-12 lg:py-10 relative`}>
				<div className={`w-fit px-4 py-2 top-0 rounded-md text-grey-dark absolute -mt-5 ${categoryBadgeBgClass}`}>{qotd.category}</div>
				<div className={`${crimson_text.className} text-xl md:text-2xl font-bold text-grey-dark capitalize`}>{qotd.title}</div>
				<div className="flex gap-1 items-center">
					<Image src={YoutubeIcon} alt="clip-quotes-logo-image" width={25} height={25} />
					<p className=" capitalize">{qotd.author}</p>
				</div>
				<div className=" md:text-lg mt-3 text-grey-[#464646] font-light lg:leading-[2rem] md:w-full ">
					<span>&quot;{qotd.transcript}&quot;</span>
				</div>
			</div>
		</div>
	);
};
