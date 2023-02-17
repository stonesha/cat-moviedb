import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { MovieResponse } from '$lib/types';

type OutputType = {
	movie: Promise<MovieResponse>;
	movie_genres: Promise<{ [key: number]: string }>;
};

export const load: PageServerLoad<OutputType> = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		movie: router.createCaller(await createContext(event)).get_movie(id),
		movie_genres: router.createCaller(await createContext(event)).movie_genres()
	};
};
