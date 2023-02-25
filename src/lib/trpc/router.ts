import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { MOVIEDB_API_KEY } from '$env/static/private';
import type { PopularPeopleResponse, PeopleResponse } from '$lib/types';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

const MOVIEDB_API_URL = 'https://api.themoviedb.org/3';

export const router = t.router({
	popular_people: t.procedure.query(async () => {
		const response: PopularPeopleResponse = await fetch(
			`${MOVIEDB_API_URL}/person/popular?api_key=${MOVIEDB_API_KEY}&language=en-US`
		).then((res) => res.json());

		return response;
	}),
	get_person: t.procedure.input(z.string()).query(async ({ input }) => {
		const response: PeopleResponse = await fetch(
			`${MOVIEDB_API_URL}/person/${input}?api_key=${MOVIEDB_API_KEY}&language=en-US`
		).then((res) => res.json());
		return response;
	})
});

export type Router = typeof router;
