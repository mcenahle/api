export async function handleBingWallpaperInfo(request, env) {
	const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN');

	const data = await response.json();

	const image = data.images[0];

	const baseUrl = 'https://www.bing.com';

	return Response.json({
		ok: true,
		title: image.title,
		copyright: image.copyright,
		date: image.startdate,
		url: `${baseUrl}${image.url}`,
		hdurl: image.hdurl ? `${baseUrl}${image.hdurl}` : `${baseUrl}${image.url}`,
	});
}
