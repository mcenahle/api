export async function handleBingWallpaperInfo(request, env) {
	const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN');

	const data = await response.json();

	const image = data.images[0];

	return Response.json({
		ok: true,
		title: image.title,
		copyright: image.copyright,
		date: image.startdate,
		url: `https://www.bing.com${image.url}`,
		hdurl: `https://www.bing.com${image.hdurl}`,
	});
}
