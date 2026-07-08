import { handleTime } from './routes/time';
import { handleRandom } from './routes/random';
import { handleUUID } from './routes/uuid.js';
import { handleBingWallpaper } from './routes/bing-wallpaper.js';
import { handleBingWallpaperInfo } from './routes/bing-wallpaper-info.js';

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

			case '/bing-wallpaper':
				return handleBingWallpaper(request, env);

			case '/bing-wallpaper-info':
				return handleBingWallpaperInfo(request, env);

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
