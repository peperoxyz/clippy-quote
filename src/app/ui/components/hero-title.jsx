import { Sparkle } from "../sparkle";
import { crimson_text } from "../fonts";

export const HeroTitle = () => {
	return (
		<div className="hero-title">
			<div className="flex gap-4 items-center">
				<Sparkle />
				<h1 className={`${crimson_text.className} md:text-[30px] lg:text-[47px] text-4xl text-grey-dark  md:leading-[40px] lg:leading-[53px] font-bold`}>
					Discover <br /> Your Insights
				</h1>
			</div>
			<div className="text-xl md:text-lg lg:text-lg font-light mt-3 text-stone-600 md:pr-9 leading-[29px]">
				<span className="">Keep track of good wise words you heard or read from anywhere. Turn them into notes you can easily revisit, deepening your reflections and understanding.</span>
			</div>
		</div>
	);
};
