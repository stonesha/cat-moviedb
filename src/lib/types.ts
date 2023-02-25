export type PopularPeopleResponse = {
	page: number;
	results: {
		adult: boolean;
		gender: number;
		id: number;
		known_for: {
			backdrop_path?: string;
			first_air_date?: string;
			genre_ids: number[];
			id: number;
			media_type: string;
			name?: string;
			origin_country?: string[];
			original_language: string;
			original_name?: string;
			overview: string;
			poster_path: string;
			vote_average: number;
			vote_count: number;
			adult?: boolean;
			original_title?: string;
			release_date?: string;
			title?: string;
			video?: boolean;
		}[];
		known_for_department: string;
		name: string;
		popularity: number;
		profile_path: string;
	}[];
	total_pages: number;
	total_results: number;
};

export type PeopleResponse = {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string;
	gender: number;
	homepage: string;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string;
};
