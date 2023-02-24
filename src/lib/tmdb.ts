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
