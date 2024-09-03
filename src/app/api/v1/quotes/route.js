// GET localhost:3000/api/v1/quotes
export async function GET() {
	return Response.json({ message: "Getting quotes success", quotes: [] });
}

// POST localhost:3000/api/v1/quotes
export async function POST(req) {
	const body = await req.json();

	return Response.json({ message: "Creating new quote success", quotes: [body] });
}
