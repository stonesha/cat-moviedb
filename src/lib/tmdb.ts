import { MOVIEDB_API_KEY } from '$env/static/private';

type PopularMoviesResponse = {
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

type MovieResponse = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	budget: number;
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: {
		english_name: string;
		iso_639_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type PopularTvShowResponse = {
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

export type TvShowResponse = {
	adult: boolean;
	backdrop_path: string;
	created_by: {
		id: number;
		credit_id: string;
		name: string;
		gender: number;
		profile_path: string;
	}[];
	episode_run_time: number[];
	first_air_date: string;
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: {
		air_date: string;
		episode_number: number;
		id: number;
		name: string;
		overview: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
		vote_average: number;
		vote_count: number;
	};
	name: string;
	next_episode_to_air: {
		air_date: string;
		episode_number: number;
		id: number;
		name: string;
		overview: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string;
		vote_average: number;
		vote_count: number;
	};
	networks: {
		id: number;
		name: string;
		logo_path: string;
		origin_country: string;
	}[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path?: string;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	seasons: {
		air_date: string;
		episode_count: number;
		id: number;
		name: string;
		overview: string;
		poster_path: string;
		season_number: number;
	}[];
	spoken_languages: {
		english_name: string;
		iso_639_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

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

const MOVIEDB_API_URL = 'https://api.themoviedb.org/3';

export const get_popular_movies = async (page = 1) => {
	const popular_movies: PopularMoviesResponse = await fetch(
		`${MOVIEDB_API_URL}/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${page}`
	).then((res) => res.json());

	return popular_movies;
};

export const get_movie_by_id = async (id: string) => {
	const movie: MovieResponse = await fetch(
		`${MOVIEDB_API_URL}/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`
	).then((res) => res.json());

	return movie;
};

export const get_movie_genres = async () => {
	const response: { genres: { id: number; name: string }[] } = await fetch(
		`${MOVIEDB_API_URL}/genre/movie/list?api_key=${MOVIEDB_API_KEY}&language=en-US`
	).then((res) => res.json());

	const movie_genres: Map<number, string> = new Map();

	response.genres.map((genre) => {
		movie_genres.set(genre.id, genre.name);
	});

	return movie_genres;
};

export const get_popular_tv_shows = async (page = 1) => {
	const popular_tv_shows: PopularTvShowResponse = await fetch(
		`${MOVIEDB_API_URL}/tv/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${page}`
	).then((res) => res.json());

	return popular_tv_shows;
};

export const get_tv_show = async (id: string) => {
	const tv_show: TvShowResponse = await fetch(
		`${MOVIEDB_API_URL}/tv/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`
	).then((res) => res.json());
	return tv_show;
};

export const get_tv_show_genres = async () => {
	const response: { genres: { id: number; name: string }[] } = await fetch(
		`${MOVIEDB_API_URL}/genre/tv/list?api_key=${MOVIEDB_API_KEY}&language=en-US`
	).then((res) => res.json());

	const tv_show_genres: Map<number, string> = new Map();

	response.genres.map((genre) => {
		tv_show_genres.set(genre.id, genre.name);
	});

	return tv_show_genres;
};

export const get_popular_people = async () => {
	const popular_people: PopularPeopleResponse = await fetch(
		`${MOVIEDB_API_URL}/person/popular?api_key=${MOVIEDB_API_KEY}&language=en-US`
	).then((res) => res.json());

	return popular_people;
};

export const get_person = async (id: string) => {
	const response: PeopleResponse = await fetch(
		`${MOVIEDB_API_URL}/person/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`
	).then((res) => res.json());
	return response;
};
