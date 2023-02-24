import type { PageServerLoad } from './$types';
import type { PopularMoviesResponse } from '$lib/types';
import { get_popular_movies, get_movie_genres } from '~/lib/tmdb';

type OutputType = {
	popular_movies: PopularMoviesResponse;
	movie_genres: Map<number, string>;
};

export const load: PageServerLoad<OutputType> = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_movies: await get_popular_movies(),
		movie_genres: await get_movie_genres()
	};
};
