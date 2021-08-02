<script>
	import { Router, Link, Route } from "svelte-routing";
	import CitySearch from './CitySearch.svelte';
</script>

<main>
	<CitySearch />
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	// @media (min-width: 640px) {
	// 	main {
	// 		max-width: none;
	// 	}
	// }
</style>