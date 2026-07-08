export async function handleBingWallpaper(request, env) {
	const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN');

	const data = await response.json();

	const image = data.images[0];

	return Response.redirect(`https://www.bing.com${image.url}`, 302);
}
