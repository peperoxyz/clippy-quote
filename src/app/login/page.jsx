import { LoginForm } from "../ui/components/login-form";

export default async function Home() {
	return (
		<section className="h-[80vh] flex flex-col justify-center">
			<div className="text-center">
				<h1 className="text-xl md:text-3xl">Login Account</h1>
			</div>
			<div>
				<LoginForm />
			</div>
		</section>
	);
}
