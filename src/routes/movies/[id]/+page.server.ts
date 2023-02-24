import type { PageServerLoad } from './$types';
import { get_movie_by_id, get_movie_genres } from '~/lib/tmdb';

export const load: PageServerLoad = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		movie: await get_movie_by_id(id),
		movie_genres: await get_movie_genres()
	};
};
