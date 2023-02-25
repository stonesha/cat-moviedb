import type { PageServerLoad } from './$types';
import { get_person } from '~/lib/tmdb';

export const load: PageServerLoad = async (event) => {
	event.setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	const id = event.params.id;

	return {
		person: get_person(id)
	};
};
