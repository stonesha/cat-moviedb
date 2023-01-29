import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { MovieDbResponse } from '$lib/types';

type OutputType = {
	popular_movies: Promise<MovieDbResponse>;
	movie_genres: Promise<{ [key: number]: string }>;
};

// 👇 since this is only called on the server, we can bypass HTTP 💡
export const load: PageServerLoad<OutputType> = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_movies: router.createCaller(await createContext(event)).popular_movies(),
		movie_genres: router.createCaller(await createContext(event)).movie_genres()
	};
};
