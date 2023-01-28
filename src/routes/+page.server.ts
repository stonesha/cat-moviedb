import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { MovieDbResponse } from '$lib/types';

type OutputType = { popular_movies: Promise<MovieDbResponse> };

// 👇 since this is only called on the server, we can bypass HTTP 💡
export const load: PageServerLoad<OutputType> = async (event) => ({
	popular_movies: router.createCaller(await createContext(event)).popular_movies()
});
