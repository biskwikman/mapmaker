<script>
	import { Router, Link, Route } from "svelte-routing";
	import CitySearch from './components/CitySearch.svelte';
	import Navbar from './components/Navbar.svelte';
	import Map from './components/Map.svelte';
</script>

<Navbar />
<main>
	<div class="split">
		<Map />
		<div>
			<CitySearch />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		text-align: center;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.split {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>