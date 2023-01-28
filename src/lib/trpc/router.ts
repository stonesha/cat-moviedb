import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { MOVIEDB_API_KEY } from '$env/static/private';
import type { MovieDbResponse } from '$lib/types';

export const t = initTRPC.context<Context>().create();

const MOVIEDB_API_URL = 'https://api.themoviedb.org/3';

export const router = t.router({
	popular_movies: t.procedure.query(async () => {
		const response: MovieDbResponse = await fetch(
			`${MOVIEDB_API_URL}/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
		).then((res) => res.json());
		return response;
	})
});

export type Router = typeof router;
