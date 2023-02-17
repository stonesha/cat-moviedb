import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';
import type { PeopleResponse } from '$lib/types';

type OutputType = {
	person: Promise<PeopleResponse>;
};

export const load: PageServerLoad<OutputType> = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		person: router.createCaller(await createContext(event)).get_person(id)
	};
};
