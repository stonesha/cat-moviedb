import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { TvShowResponse } from '$lib/types';

type OutputType = {
	tv_show: Promise<TvShowResponse>;
	tv_show_genres: Promise<{ [key: number]: string }>;
};

export const load: PageServerLoad<OutputType> = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		tv_show: router.createCaller(await createContext(event)).get_tv_show(id),
		tv_show_genres: router.createCaller(await createContext(event)).tv_show_genres()
	};
};
