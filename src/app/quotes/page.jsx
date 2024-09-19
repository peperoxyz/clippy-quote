import { HeroTitle } from "../ui/components/hero-title";
import { QuoteCard } from "../ui/components/quotes/quote-card";
import { QuoteForm } from "../ui/components/quotes/quote-form";
import { Qotd } from "../ui/components/quotes/qotd";

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
				<div className="top-0 z-20 bg-primary-light pt-3">
					<Qotd />
				</div>
				<div className="quote-card-component mt-8 relative z-10">
					{quotes.map((quote) => (
						<QuoteCard key={quote._id} quote={quote} />
					))}
				</div>
			</section>
		</div>
	);
}
