<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let { popular_people } = data;
	$: ({ popular_people } = data);

	const IMAGE_URL = 'https://image.tmdb.org/t/p/w235_and_h235_face';

	type KnownFor = (typeof popular_people)['results'][number]['known_for'][number];

	const getMediaName = (known_for: KnownFor) => {
		if ('original_title' in known_for) return known_for['original_title'];
		else if ('name' in known_for) return known_for['name'];
	};

	const formatKnownFor = (media: KnownFor[]) => {
		return media.map((media) => getMediaName(media)).join(', ');
	};
</script>

<svelte:head>
	<title>cat-moviedb | Movies</title>
</svelte:head>

<div class="mx-auto max-w-2xl py-16 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
	<div class="min-w-0 flex-1">
		<h2
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-2"
		>
			Popular People
		</h2>
	</div>

	<div
		class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-8"
	>
		{#each popular_people.results as person}
			<div
				class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
			>
				<div class="bg-gray-200 group-hover:opacity-75">
					<img
						src={`${IMAGE_URL}${person.profile_path}`}
						alt={`${person.name} picture`}
						class="h-full w-full object-cover object-center sm:h-full sm:w-full"
					/>
				</div>
				<div class="flex flex-1 flex-col space-y-2 p-4">
					<h3 class="text-md font-medium text-gray-900">
						<a href={`/people/${person.id}`}>
							<span aria-hidden="true" class="absolute inset-0" />
							{person.name}
						</a>
					</h3>
					<p class="text-sm font-normal text-gray-900 m-1 break-words">
						{formatKnownFor(person.known_for)}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
