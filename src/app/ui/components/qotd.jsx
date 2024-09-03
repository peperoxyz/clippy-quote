"use client";

import { CqLogo } from "../cq-logo";
import { Sparkle } from "../sparkle";
import { crimson_text } from "../fonts";
import YoutubeIcon from "../../../assets/icons/youtube-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export const Qotd = ({ selectedQotd }) => {
	const [qotd, setQotd] = useState({
		author: "The Primeagen",
		title: "When something worries you, stop.",
		transcript:
			"You've solved problems in the past. You're gonna solve this one too. You started to learn how to program knowing nothing about programming, and now you're doing it fulltime. Just think about how far you've come, and how many problems you've solved.",
	});
	return (
		<div>
			<div className="flex gap-5 items-center">
				<CqLogo />
				<h2 className={`${crimson_text.className} text-[30px] font-semibold text-grey-dark  `}>Quote Of The Day</h2>
			</div>
			<div className="mt-10 text-grey-dark shadow-[#FFA986] shadow-lg bg-primary p-8 lg:px-12 lg:py-10 relative">
				<div className="w-fit px-4 py-2 top-0 rounded-md text-primary-light absolute -mt-5 bg-[#FFA986]">Mindset and Beliefs</div>
				<div className={`${crimson_text.className} text-xl md:text-2xl font-bold text-grey-dark `}>{qotd.title}</div>
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
