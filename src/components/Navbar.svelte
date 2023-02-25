<script lang="ts">
	import { page } from '$app/stores';
	import { createDisclosure } from 'svelte-headlessui';

	const mobile_menu = createDisclosure({ label: 'Mobile Menu', expanded: false });
</script>

<nav class="bg-transparent">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					use:mobile_menu.button
				>
					<span class="sr-only">Open main menu</span>
					{#if $mobile_menu.expanded}
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					{/if}
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<a class="flex flex-shrink-0 items-center text-slate-700 font-bold" href="/"
					>cat-moviedb &nbsp;<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
						/>
					</svg>
				</a>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="/"
							class={`${
								$page.route.id === '/' ? 'bg-slate-200' : 'hover:bg-slate-100 hover:text-slate-900'
							} text-slate-700 px-3 py-2 rounded-md text-sm font-medium`}
							aria-current="page"
							data-sveltekit-preload-data>Home</a
						>

						<a
							href="/movies"
							class={`${
								$page.route.id?.includes('/movies')
									? 'bg-slate-200'
									: 'hover:bg-slate-100 hover:text-slate-900'
							} text-slate-700 px-3 py-2 rounded-md text-sm font-medium`}
							data-sveltekit-preload-data>Movies</a
						>

						<a
							href="/tv-shows"
							class={`${
								$page.route.id?.includes('/tv-shows')
									? 'bg-slate-100'
									: 'hover:bg-slate-100 hover:text-slate-900'
							} text-slate-700 px-3 py-2 rounded-md text-sm font-medium`}
							data-sveltekit-preload-data>TV Shows</a
						>

						<a
							href="/people"
							class={`${
								$page.route.id?.includes('/people')
									? 'bg-slate-100'
									: 'hover:bg-slate-100 hover:text-slate-900'
							} text-slate-700 px-3 py-2 rounded-md text-sm font-medium`}
							data-sveltekit-preload-data>People</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if $mobile_menu.expanded}
		<div class="sm:hidden" id="mobile-menu" use:mobile_menu.panel>
			<div class="space-y-1 px-2 pt-2 pb-3">
				<a
					href="/"
					class={`${
						$page.route.id === '/' ? 'bg-slate-100' : 'hover:bg-slate-100 hover:text-slate-900'
					} text-slate-700 block px-3 py-2 rounded-md text-base font-medium`}
					aria-current="page">Home</a
				>

				<a
					href="/movies"
					class={`${
						$page.route.id?.includes('/movies')
							? 'bg-slate-100'
							: 'hover:bg-slate-100 hover:text-slate-900'
					} text-slate-700 block px-3 py-2 rounded-md text-base font-medium`}>Movies</a
				>

				<a
					href="/tv-shows"
					class={`${
						$page.route.id?.includes('/tv-shows')
							? 'bg-slate-100'
							: 'hover:bg-slate-100 hover:text-slate-900'
					} text-slate-700 block px-3 py-2 rounded-md text-base font-medium`}>TV Shows</a
				>

				<a
					href="/people"
					class={`${
						$page.route.id?.includes('/people')
							? 'bg-slate-100'
							: 'hover:bg-slate-100 hover:text-slate-900'
					} text-slate-700 block px-3 py-2 rounded-md text-base font-medium`}>People</a
				>
			</div>
		</div>
	{/if}
</nav>
