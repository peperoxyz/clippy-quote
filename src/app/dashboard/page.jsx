export default async function Home() {
	return (
		<div className="children-wrapper md:flex gap:5">
			<section className="section-categories bg-primary md:w-1/2 w-full ">
				<div>
					{/* <HeroTitle /> */}
					Protected Dashboard: Only Logged In User
				</div>
			</section>
			{/* <section className="section-quotes mt-5 md:mt-0 h-screen md:absolute md:top-0 md:right-0 px-10 py-16 md:w-1/2 bg-primary-light  flex-1 "></section> */}
		</div>
	);
}
