import { HeroTitle } from "../ui/components/hero-title";
import { QuoteCard } from "../ui/components/quote-card";
import { QuoteForm } from "../ui/components/quote-form";
import { Qotd } from "../ui/components/qotd";

import { fetchCategories, fetchQuotes } from "../lib/fetch-data";

export default async function Home() {
	const quotes = await fetchQuotes();
	const categories = await fetchCategories();

	return (
		<div className="children-wrapper md:flex gap:5">
			<section className="section-add-quotes flex flex-col items-center justify-center md:pr-8 bg-primary md:w-1/2 w-full ">
				<div>
					<HeroTitle />
				</div>
				<QuoteForm categories={categories} />
			</section>
			<section className="section-quotes md:rounded-none rounded-[6px] min-h-screen md:absolute md:top-0 right-0 px-10 md:px-12 py-12 md:w-1/2 bg-primary-light  flex-1 ">
				<div>
					<Qotd />
				</div>
				<div className="quote-card-component mt-8">
					{quotes.map((quote) => (
						<QuoteCard key={quote._id} quote={quote} />
					))}
				</div>
			</section>
		</div>
	);
}
