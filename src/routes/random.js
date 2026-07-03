export async function handleRandom(request, env) {
	if (!env.RANDOM_ORG_API_KEY) {
		return Response.json(
			{
				ok: false,
				error: 'Missing RANDOM_ORG_API_KEY',
			},
			{ status: 500 },
		);
	}

	const response = await fetch('https://api.random.org/json-rpc/4/invoke', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'generateIntegers',
			params: {
				apiKey: env.RANDOM_ORG_API_KEY,
				n: 1,
				min: 1,
				max: 100,
				replacement: true,
			},
			id: 1,
		}),
	});

	const data = await response.json();

	if (data.error) {
		let status = 502;
		let error = 'Random number service is temporarily unavailable.';

		switch (data.error.code) {
			case 401:
				status = 500;
				error = 'Random number service is not configured correctly.';
				break;
		}

		// 记录详细错误到 Cloudflare 日志
		console.error('RANDOM.ORG Error:', data.error);

		return Response.json(
			{
				ok: false,
				error,
			},
			{ status },
		);
	}

	return Response.json({
		ok: true,
		number: data.result.random.data[0],
	});
}
