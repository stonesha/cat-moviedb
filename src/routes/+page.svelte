<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let { popular_movies } = data;
	$: ({ popular_movies } = data);

	console.log(popular_movies);
</script>

{#each popular_movies.results as movie}
	<p>{movie.original_title}</p>
{/each}
