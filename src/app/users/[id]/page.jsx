import Link from "next/link";

async function getUser(id) {
	const res = await fetch(`http://localhost:3000/api/v1/users/${id}`);
	const { data } = await res.json();
	return data;
}

export default async function UserDetail({ params }) {
	const { id } = params;
	const user = await getUser(id);

	return (
		<main>
			<h1>{user.username}&apos;s Profile</h1>
			<p>Email: {user.email}</p>
			<p>Address: {user.address}</p>
		</main>
	);
}
