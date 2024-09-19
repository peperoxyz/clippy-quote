import Link from "next/link";
import { fetchUsers } from "../lib/fetch-data";

export default async function Home() {
	const users = await fetchUsers();
	console.log(users);
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
