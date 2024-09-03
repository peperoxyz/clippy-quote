"use client";

import { Sparkle } from "../sparkle";
import { crimson_text } from "../fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CategoryCard = ({ categories }) => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	function handleSelectedCategory(category) {
		setSelectedCategory(category.name);
	}

	useEffect(() => {
		if (selectedCategory !== null) {
			console.log(selectedCategory);
		}
	}, [selectedCategory]);

	return (
		<div>
			<div className="mt-12">
				{categories.map((category) => (
					<div onClick={() => handleSelectedCategory(category)} className="py-10 hover:bg-white hover:cursor-pointer border border-l-0 border-r-0 border-b-0" key={category._id}>
						<h2 className={`${crimson_text.className} text-xl font-bold`}>{category.name}</h2>
						<p className="leading-[28px] text-grey-medium font-light line-clamp-2">{category.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
