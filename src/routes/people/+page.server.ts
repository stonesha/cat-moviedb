import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { PeopleDbResponse } from '$lib/types';

type OutputType = {
	popular_people: Promise<PeopleDbResponse>;
};

// 👇 since this is only called on the server, we can bypass HTTP 💡
export const load: PageServerLoad<OutputType> = async (event) => {
	// cache page data for an hour
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		popular_people: router.createCaller(await createContext(event)).popular_people()
	};
};
