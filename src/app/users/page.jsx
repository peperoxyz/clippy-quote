import Link from "next/link";

async function getUsers() {
	const res = await fetch("http://localhost:3000/api/v1/users", { cache: "no-store" });
	const { data } = await res.json();
	console.log(data);
	return data;
}

export default async function Home() {
	const users = await getUsers();
	return (
		<main>
			<div>
				{users.map((user) => (
					<div key={user.id}>
						<Link href={`/users/${user.id}`}>{user.username}</Link>
					</div>
				))}
			</div>
		</main>
	);
}
