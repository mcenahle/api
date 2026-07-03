export async function handleUUID(request, env) {
	return Response.json({
		ok: true,
		uuid: crypto.randomUUID(),
	});
}
