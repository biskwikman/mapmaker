<script>
	import CitySearch from './components/map/CitySearch.svelte'
	import Map from './components/map/Map.svelte';
	import Navbar from './components/Navbar.svelte';
	import LayoutControl from './components/map/LayoutControl.svelte';
	
</script>

<main>
	<Navbar/>
	<div id='create-map'>
		<div id='left'>
			<Map/>
		</div>
		
		<div id='right'>
			<CitySearch/>
			<LayoutControl/>
		</div>
	</div>

</main>

<style lang="scss">
	#left, #right {
		width: 100%;
		height: 93vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#create-map {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
	}

	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(243, 234, 221);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>