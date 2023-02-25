import type { PageServerLoad } from './$types';
import { get_popular_people } from '~/lib/tmdb';

// 👇 since this is only called on the server, we can bypass HTTP 💡
export const load: PageServerLoad = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_people: await get_popular_people()
	};
};
