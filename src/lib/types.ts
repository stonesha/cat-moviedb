export type MovieDbResponse = {
	page: number;
	results: {
		adult: boolean;
		backdrop_path: string;
		genre_ids: number[];
		id: number;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
	}[];
	total_pages: number;
	total_results: number;
};

export type TvDbResponse = {
	page: number;
	results: {
		backdrop_path: null | string;
		first_air_date: string;
		genre_ids: number[];
		id: number;
		name: string;
		origin_country: string[];
		original_language: string;
		original_name: string;
		overview: string;
		popularity: number;
		poster_path: string;
		vote_average: number;
		vote_count: number;
	}[];
	total_pages: number;
	total_results: number;
};

export type PeopleDbResponse = {
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
