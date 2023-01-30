import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { MOVIEDB_API_KEY } from '$env/static/private';
import type { MovieDbResponse, TvDbResponse, PeopleDbResponse } from '$lib/types';

export const t = initTRPC.context<Context>().create();

const MOVIEDB_API_URL = 'https://api.themoviedb.org/3';

export const router = t.router({
	popular_movies: t.procedure.query(async () => {
		const response: MovieDbResponse = await fetch(
			`${MOVIEDB_API_URL}/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
		).then((res) => res.json());
		return response;
	}),
	movie_genres: t.procedure.query(async () => {
		const response: { genres: { id: number; name: string }[] } = await fetch(
			`${MOVIEDB_API_URL}/genre/movie/list?api_key=${MOVIEDB_API_KEY}&language=en-US`
		).then((res) => res.json());

		const genres: { [key: number]: string } = {};

		response.genres.map((genre) => {
			genres[genre.id] = genre.name;
		});

		return genres;
	}),
	popular_tv_shows: t.procedure.query(async () => {
		const response: TvDbResponse = await fetch(
			`${MOVIEDB_API_URL}/tv/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
		).then((res) => res.json());
		return response;
	}),
	tv_show_genres: t.procedure.query(async () => {
		const response: { genres: { id: number; name: string }[] } = await fetch(
			`${MOVIEDB_API_URL}/genre/tv/list?api_key=${MOVIEDB_API_KEY}&language=en-US`
		).then((res) => res.json());

		const genres: { [key: number]: string } = {};

		response.genres.map((genre) => {
			genres[genre.id] = genre.name;
		});

		return genres;
	}),
	popular_people: t.procedure.query(async () => {
		const response: PeopleDbResponse = await fetch(
			`${MOVIEDB_API_URL}/person/popular?api_key=${MOVIEDB_API_KEY}&language=en-US`
		).then((res) => res.json());

		return response;
	})
});

export type Router = typeof router;
