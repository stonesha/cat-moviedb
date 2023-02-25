import type { PageServerLoad } from './$types';
import { get_tv_show, get_tv_show_genres } from '~/lib/tmdb';

export const load: PageServerLoad = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		tv_show: await get_tv_show(id),
		tv_show_genres: await get_tv_show_genres()
	};
};
