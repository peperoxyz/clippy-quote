"use client";

import clsx from "clsx";
import { crimson_text } from "../../fonts";
import YoutubeIcon from "/src/assets/icons/youtube-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { quotesAtom } from "./quote-atom";
import { useAtom } from "jotai";

import toast from "react-hot-toast";

export const QuoteCard = ({ quote }) => {
	const router = useRouter();
	const [qotd, setQotd] = useAtom(quotesAtom);
	const [vote, setVote] = useState(quote.likes);

	const [loading, setLoading] = useState(false);

	function handleQotd(quote) {
		setQotd(quote);
	}

	async function handleDeleteData() {
		setLoading(true);
		const res = await fetch("https://v1.appbackend.io/v1/rows/dfysIrXThAj0", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([quote._id]),
		});

		const data = await res.json();

		if (data) {
			router.refresh();
			setLoading(false);
			toast.success("Quotes deleted successfully!");
		}
		router.refresh();
	}

	async function sendVoteToDb(quote, vote) {
		console.log(quote._id, vote);
		await fetch("https://v1.appbackend.io/v1/rows/dfysIrXThAj0", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ _id: quote._id, author: quote.author, title: quote.title, transcript: quote.transcript, category: quote.category, likes: vote, downvote: 0 }),
		});

		router.refresh();
	}

	function handleVoteData(quote, event) {
		const voteType = event.target.name;
		console.log(`Vote type: ${voteType}`, quote);
		if (voteType === "upvote") {
			setVote(vote + 1);
			sendVoteToDb(quote, vote);
		}
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
				<div className=" w-full hover:bg-primary bg-primary-light p-6 border border-l-0 border-r-0 border-b-0 relative">
					<div className="block md:hidden w-fit mb-2">
						<div className={` ${backgroundColorClass} text-grey-medium text-xs rounded-6 px-2 py-1`}>{quote.category}</div>
					</div>
					<div className={`h-16 top-5 w-[3px] left-0 absolute ${backgroundColorClass}`}></div>
					<div className="flex justify-between">
						<div>
							<h2 className={`${crimson_text.className} text-xl font-bold capitalize`}>{quote.title}</h2>
							<div className="flex gap-1 items-center">
								<Image src={YoutubeIcon} alt="clip-quotes-logo-image" width={20} height={20} />
								<p className="md:text-sm capitalize">{quote.author}</p>
							</div>
						</div>
						<div className="hidden md:block">
							<div className={` ${backgroundColorClass} text-grey-medium text-xs rounded-6 px-2 py-1`}>{quote.category}</div>
						</div>
					</div>
					<p className="leading-[28px] mt-3 text-grey-medium font-light">&quot;{quote.transcript}&quot;</p>
					<div className="flex justify-between">
						<div className="flex gap-2">
							<div className="py-3 pb-0 text-[#827F7F]">
								<button onClick={(event) => handleVoteData(quote, event)} name="upvote" className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39]">
									{quote.likes} 👍
								</button>
							</div>
							<div className="py-3 pb-0 text-[#827F7F] hidden">
								<button onClick={(event) => handleVoteData(quote, event)} name="downvote" className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39]">
									👎🏻👎👎🏽
								</button>
							</div>
							<div className="py-3 pb-0 text-[#827F7F]">
								<button onClick={() => handleQotd(quote)} className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39]">
									Set as QOTD
								</button>
							</div>
						</div>
						<div className="py-3 pb-0 text-[#827F7F]">
							<button disabled={loading} onClick={handleDeleteData} className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39] disabled:opacity-50">
								{loading ? "Loading..." : "Delete"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
