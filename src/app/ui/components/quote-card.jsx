"use client";

import clsx from "clsx";
import { CqLogo } from "../../ui/cq-logo";
import { Sparkle } from "../sparkle";
import { crimson_text } from "../fonts";
import YoutubeIcon from "../../../assets/icons/youtube-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export const QuoteCard = ({ quote }) => {
	const router = useRouter();
	const [qotd, setQotd] = useState(null);

	async function handleDeleteData() {
		await fetch("https://v1.appbackend.io/v1/rows/dfysIrXThAj0", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([quote._id]),
		});

		router.refresh();
	}

	function handleQotd(quote) {
		console.log(quote);
		localStorage.setItem("selectedQotd", JSON.stringify(quote));
		router.refresh();
	}

	const backgroundColorClass = clsx({
		"bg-[#FFA986]": quote.category === "Relationship",
		"bg-[#9DE9F8]": quote.category === "Mindset and Beliefs",
		"bg-[#FFCA71]": quote.category === "Weight Loss",
		"bg-[#CEB6FF]": quote.category === "Problem Solving",
		"bg-[#C0CF75]": quote.category === "Good Career",
		hidden: !["Relationship", "Mindset and Beliefs", "Weight Loss", "Problem Solving", "Good Career"].includes(quote.category),
	});

	return (
		<div key={quote._id} className="text-grey-dark">
			<div className="flex justify-between w-full">
				<div className=" w-full hover:bg-primary p-6 border border-l-0 border-r-0 border-b-0 relative">
					<div className={`h-16 top-5 w-[3px] left-0 absolute ${backgroundColorClass}`}></div>

					<h2 className={`${crimson_text.className} text-xl font-bold capitalize`}>{quote.title}</h2>
					<div className="flex gap-1 items-center">
						<Image src={YoutubeIcon} alt="clip-quotes-logo-image" width={20} height={20} />
						<p className="md:text-sm capitalize">{quote.author}</p>
					</div>
					<p className="leading-[28px] mt-3 text-grey-medium font-light">"{quote.transcript}"</p>
					<div className="flex gap-2">
						<div className="py-3 pb-0 text-[#827F7F]">
							<button onClick={handleDeleteData} className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39]">
								Delete
							</button>
						</div>
						<div className="py-3 pb-0 hidden text-[#827F7F]">
							<button onClick={() => handleQotd(quote)} className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39]">
								Set as QOTD
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
