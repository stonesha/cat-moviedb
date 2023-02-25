import type { PageServerLoad } from './$types';
import { get_popular_tv_shows, get_tv_show_genres } from '~/lib/tmdb';

// 👇 since this is only called on the server, we can bypass HTTP 💡
export const load: PageServerLoad = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_tv_shows: await get_popular_tv_shows(),
		tv_show_genres: await get_tv_show_genres()
	};
};
