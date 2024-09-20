import { RegisterForm } from "..//ui/components/register-form";

export default async function Home() {
	return (
		<section className="h-[80vh] flex flex-col justify-center">
			<div className="text-center">
				<h1 className="text-xl md:text-3xl">Register Account</h1>
			</div>
			<div>
				<RegisterForm />
			</div>
		</section>
	);
}
