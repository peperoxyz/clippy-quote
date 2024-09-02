const fetchCategories = async () => {
	const res = await fetch("https://v1.appbackend.io/v1/rows/QSnvVuqR8Kdh");
	const { data } = await res.json();
	return data;
};

export default async function Home() {
	const categories = await fetchCategories();
	console.log(categories);
	return (
		<div className="children-wrapper md:flex gap:5">
			<section className="section-categories p-3 bg-primary md:w-1/2 w-full border">
				<div>{/* <TitlePage /> */}</div>
				<div className="search-and-button-category flex justify-between">
					{/* <SearchInput />
					<CategoryButton /> */}
				</div>
				<div className="wrapper-category-list  p-5">
					{/* mapping the fetched category list */}
					{categories.map((category) => {
						return (
							<div>
								<h2>{category.name}</h2>
								<p>{category.description}</p>
							</div>
						);
					})}
				</div>
			</section>
			<section className="section-quotes p-5 bg-pink-200 flex-1 "></section>
		</div>
	);
}
