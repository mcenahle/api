import { handleTime } from './routes/time';
import { handleRandom } from './routes/random';
import { handleUUID } from './routes/uuid.js';

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		switch (url.pathname) {
			case '/time':
				return handleTime(request, env);

			case '/random':
				return handleRandom(request, env);

			case '/uuid':
				return handleUUID(request, env);

			default:
				return Response.json(
					{
						ok: false,
						message: '404 Not Found',
					},
					{
						status: 404,
					},
				);
		}
	},
};
