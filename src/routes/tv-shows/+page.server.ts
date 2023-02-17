import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { TvShowResponse } from '$lib/types';

type OutputType = {
	popular_tv_shows: Promise<TvShowResponse>;
	tv_show_genres: Promise<{ [key: number]: string }>;
};

// 👇 since this is only called on the server, we can bypass HTTP 💡
export const load: PageServerLoad<OutputType> = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_tv_shows: router.createCaller(await createContext(event)).popular_tv_shows(),
		tv_show_genres: router.createCaller(await createContext(event)).tv_show_genres()
	};
};
