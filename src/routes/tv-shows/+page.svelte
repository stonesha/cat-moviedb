<script lang="ts">
	import type { PageServerData } from './$types';
	import { format, parseISO } from 'date-fns';

	export let data: PageServerData;
	let { popular_tv_shows, tv_show_genres } = data;
	$: ({ popular_tv_shows, tv_show_genres } = data);

	const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
</script>

<svelte:head>
	<title>cat-moviedb | TV Shows</title>
</svelte:head>

<div class="mx-auto max-w-2xl py-16 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
	<div class="min-w-0 flex-1">
		<h2
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-2"
		>
			Popular TV Shows
		</h2>
	</div>

	<div
		class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
	>
		{#each popular_tv_shows.results as tv_show}
			<div
				class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
			>
				<div class="bg-gray-200 group-hover:opacity-75 h-full md:h-[30rem]">
					<img
						src={`${IMAGE_URL}${tv_show.poster_path}`}
						alt={`${tv_show.name} poster`}
						class="h-full w-full object-cover object-center sm:h-full sm:w-full"
					/>
				</div>
				<div class="flex flex-1 flex-col space-y-2 p-4">
					<h3 class="text-md font-medium text-gray-900">
						<a href={`/tv-shows/${tv_show.id}`}>
							<span aria-hidden="true" class="absolute inset-0" />
							{tv_show.name}
						</a>
					</h3>
					<p class="text-sm text-gray-500">
						{tv_show.overview}
					</p>
					<div class="flex flex-1 flex-col justify-end">
						{#if tv_show.first_air_date !== ''}
							<p class="text-sm italic text-gray-500">
								{format(parseISO(tv_show.first_air_date), 'MM/dd/yyyy')}
							</p>
						{/if}
						<div class="flex flex-row flex-wrap">
							{#each tv_show.genre_ids as genre_id}
								<p class="text-base font-medium text-gray-900 m-1">
									{tv_show_genres[genre_id]}
								</p>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
