export async function fetchCategories() {
	const res = await fetch("https://v1.appbackend.io/v1/rows/QSnvVuqR8Kdh", {
		cache: "no-store",
	});
	const { data } = await res.json();
	return data;
}

export async function fetchQuotes() {
	const res = await fetch("https://v1.appbackend.io/v1/rows/dfysIrXThAj0", {
		cache: "no-store",
	});
	const { data } = await res.json();
	return data;
}

export async function fetchUsers() {
	const res = await fetch("http://localhost:3000/api/v1/users", { cache: "no-store" });
	const { data } = await res.json();
	return data;
}
