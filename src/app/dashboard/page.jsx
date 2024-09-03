import { CqLogo } from "../ui/cq-logo";
import { crimson_text } from "../ui/fonts";
import { HeroTitle } from "../ui/components/hero-title";
import { QuoteCard } from "../ui/components/quote-card";
import { CategoryCard } from "../ui/components/category-card";

export default async function Home() {
	return (
		<div className="children-wrapper md:flex gap:5">
			<section className="section-categories bg-primary md:w-1/2 w-full ">
				<div>
					<HeroTitle />
				</div>
			</section>
			<section className="section-quotes mt-5 md:mt-0 h-screen md:absolute md:top-0 md:right-0 px-10 py-16 md:w-1/2 bg-primary-light  flex-1 "></section>
		</div>
	);
}
