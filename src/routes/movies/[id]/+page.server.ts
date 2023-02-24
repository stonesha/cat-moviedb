import type { PageServerLoad } from './$types';
import type { MovieResponse } from '$lib/types';
import { get_movie_by_id, get_movie_genres } from '~/lib/tmdb';

type OutputType = {
	movie: MovieResponse;
	movie_genres: Map<number, string>;
};

export const load: PageServerLoad<OutputType> = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		movie: await get_movie_by_id(id),
		movie_genres: await get_movie_genres()
	};
};
