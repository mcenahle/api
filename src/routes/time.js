export async function handleTime(request, env) {
  return Response.json({
    ok: true,
    time: new Date().toISOString()
  });
}