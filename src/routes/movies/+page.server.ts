import type { PageServerLoad } from './$types';
import { get_popular_movies, get_movie_genres } from '~/lib/tmdb';

export const load: PageServerLoad = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_movies: await get_popular_movies(),
		movie_genres: await get_movie_genres()
	};
};
