import { RegisterForm } from "..//ui/components/register-form";
import { fetchCategories } from "../lib/fetch-data";

export default async function Home() {
	const categories = await fetchCategories();
	console.log(categories);

	return (
		<section className="-ml-32 h-[80vh] flex flex-col justify-center">
			<div className="text-center">
				<h1 className="text-xl md:text-3xl">Register Account</h1>
			</div>
			<div>
				<RegisterForm />
			</div>
		</section>
	);
}
