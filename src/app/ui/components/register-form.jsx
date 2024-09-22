"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const RegisterForm = () => {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmitData() {
		if (!(username && password && email)) {
			toast.error("All fields must be filled!");
			return;
		} else {
			setLoading(true);
			const res = await fetch("/api/v1/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					email,
					password,
				}),
			});

			const data = await res.json();
			if (data) {
				setLoading(false);
				toast.success(data.message);
			}

			setUsername("");
			setEmail("");
			setPassword("");
			router.refresh();
		}
		router.refresh();
	}

	return (
		<div className="add-new-quote-form flex flex-col max-w-xl mx-auto gap-1.5 w-full mt-7">
			<div className="text-[#827F7F] text-xl ">
				<label htmlFor="email">
					<span className="text-lg font-medium bg-primary"> Email </span>
				</label>
				<input name="email" id="email" value={email} type="email" className="input-quote mt-1 w-full" required onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="text-[#827F7F] text-xl ">
				<label htmlFor="username">
					<span className="text-lg font-medium bg-primary"> Username </span>
				</label>
				<input name="username" id="username" type="text" value={username} className="input-quote mt-1 w-full" required onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div className="text-[#827F7F] text-xl ">
				<label htmlFor="password">
					<span className="text-lg font-medium bg-primary"> Password </span>
				</label>
				<input className="input-quote w-full mt-1" name="password" type="password" value={password} id="password" required onChange={(e) => setPassword(e.target.value)} />
			</div>
			<div className="text-[#827F7F] w-full mt-2 flex justify-end">
				<button disabled={loading} onClick={handleSubmitData} className="font-medium border py-2 px-4 border-[#B9B8B4] rounded-[6px] bg-primary-light hover:bg-[#B9B8B4]/50 hover:text-[#3a3b39] disabled:opacity-50">
					{loading ? "Loading..." : "Submit"}
				</button>
			</div>
		</div>
	);
};
