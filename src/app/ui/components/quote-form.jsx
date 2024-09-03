"use client";

import { Sparkle } from "../sparkle";
import { crimson_text } from "../fonts";
import YoutubeIcon from "../../../assets/icons/youtube-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const QuoteForm = ({ categories }) => {
	const router = useRouter();
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const [transcript, setTranscript] = useState("");
	const [category, setCategory] = useState("");

	async function handleCreateData() {
		await fetch("https://v1.appbackend.io/v1/rows/dfysIrXThAj0", {
			cache: "no-store",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([
				{
					author,
					title,
					transcript,
					category,
				},
			]),
		});

		setAuthor("");
		setTitle("");
		setTranscript("");
		setCategory("");
		router.refresh();
	}

	return (
		<div className="add-new-quote-form flex flex-col gap-2.5 w-full my-10  md:pr-10 ">
			<div className="text-[#827F7F] text-xl">
				<label htmlFor="category">
					<span className="text-lg font-medium bg-primary"> Category </span> <small>(Select one)</small>
				</label>
				<select onChange={(e) => setCategory(e.target.value)} value={category} id="category" name="category" className="select-category w-full mt-1">
					{categories.map((category) => {
						return <option key={category._id}>{category.name}</option>;
					})}
				</select>
			</div>
			<div className="text-[#827F7F] text-xl ">
				<label htmlFor="author">
					<span className="text-lg font-medium bg-primary"> Author </span> <small>(Source or anonymous)</small>
				</label>
				<input name="author" id="author" value={author} type="text" className="input-quote mt-1 w-full" onChange={(e) => setAuthor(e.target.value)} />
			</div>
			<div className="text-[#827F7F] text-xl ">
				<label htmlFor="title">
					<span className="text-lg font-medium bg-primary"> Title </span> <small>(One sentence summary)</small>
				</label>
				<input name="title" id="title" type="text" value={title} className="input-quote mt-1 w-full" onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className="text-[#827F7F] text-xl ">
				<label htmlFor="transcript">
					<span className="text-lg font-medium bg-primary"> Transcript </span> <small>(Full Text, don&apos;t have to put the quotation mark!)</small>
				</label>
				<textarea className="textarea-quote w-full mt-1 " name="transcript" value={transcript} id="transcript" onChange={(e) => setTranscript(e.target.value)} rows="5"></textarea>
			</div>
			<div className="text-[#827F7F] w-full flex justify-end">
				<button onClick={handleCreateData} className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39]">
					Submit
				</button>
			</div>
		</div>
	);
};
