<script lang="ts">
	import type { PageServerData } from './$types';
	import StarRating from 'svelte-star-rating';
	import { page } from '$app/stores';
	import { format, parseISO } from 'date-fns';

	export let data: PageServerData;
	let { tv_show, tv_show_genres } = data;
	$: ({ tv_show, tv_show_genres } = data);

	const IMAGE_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
</script>

<svelte:head>
	<title>cat-moviedb | Movies</title>
</svelte:head>

<div class="bg-transparent">
	<div class="pt-6 pb-16 sm:pb-24">
		<nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<ol class="flex items-center space-x-4">
				<li>
					<div class="flex items-center">
						<a href="/movies" class="mr-4 text-sm font-medium text-gray-900">TV Shows</a>
						<svg viewBox="0 0 6 20" aria-hidden="true" class="h-5 w-auto text-gray-300">
							<path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
						</svg>
					</div>
				</li>

				<li>
					<div class="flex items-center">
						<a href={`/movies/${$page.params.id}`} class="mr-4 text-sm font-medium text-gray-900"
							>{tv_show.name}</a
						>
					</div>
				</li>
			</ol>
		</nav>
		<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
				<div class="lg:col-span-5 lg:col-start-8">
					<div class="flex flex-col md:flex-row justify-between">
						<h1 class="text-xl font-medium text-gray-900">{tv_show.name}</h1>
						<hr class="block md:hidden" />
						<p class="text-xl font-medium text-gray-900">
							{format(parseISO(tv_show.last_air_date), 'MM/dd/yyyy')}
						</p>
					</div>
					<!-- Reviews -->
					<div class="mt-4">
						<h2 class="sr-only">Reviews</h2>
						<div class="flex flex-col md:flex-row items-center">
							<p class="text-sm text-gray-700">
								{tv_show.vote_average.toFixed(1)}
								<span class="sr-only"> out of 10 stars</span>
							</p>
							<div class="flex flex-row items-center ml-1 mt-2">
								{#if tv_show.vote_average > 5}
									<StarRating rating={5} />
									<StarRating rating={tv_show.vote_average - 5} />
								{:else}
									<StarRating rating={tv_show.vote_average} />
								{/if}
							</div>
							<div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
							<div class="ml-4 flex">
								<a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
									>See all {tv_show.vote_count} reviews</a
								>
							</div>
						</div>
					</div>
				</div>

				<!-- Image gallery -->
				<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
					<h2 class="sr-only">Images</h2>

					<div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
						<img
							src={`${IMAGE_URL}/${tv_show.poster_path}`}
							alt={`${tv_show.name} poster`}
							class="lg:col-span-2 lg:row-span-2 rounded-lg"
						/>
					</div>
				</div>

				<div class="mt-8 lg:col-span-5">
					<!-- Product details -->
					<div class="mt-10">
						<h2 class="text-sm font-medium text-gray-900">Overview</h2>

						<div class="prose prose-sm mt-4 text-gray-500">
							<p>
								{tv_show.overview}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
