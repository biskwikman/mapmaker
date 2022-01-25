<script>
import CitySearch from '../components/map/CitySearch.svelte';
import Map from '../components/map/Map.svelte';
import Navbar from '../components/Navbar.svelte';
import LayoutControl from '../components/map/LayoutControl.svelte';
import AddToCart from '../components/AddToCart.svelte';
</script>

<main>
	<Navbar/>
	<div id='create-map'>
		<div id='left'>
			<Map/>
		</div>
		<div id='right'>
			<div id='city-search'>
				<p class='heading'>Choose a location:</p>
				<CitySearch/>
			</div>
			<LayoutControl/>
			<AddToCart/>
		</div>
	</div>
</main>

<style lang="scss">
	$layoutOutlineColor: rgb(163, 163, 163);
	$layoutOutlineWidth: 1px;
	$layoutOutlineStyle: solid;

	#left, #right {
		width: 100%;
		height: 93vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#right {
		width: 45vw;
		background-color: rgb(230, 230, 230);
		box-shadow: 0px 7px 10px rgb(101, 107, 109);
		outline-width: $layoutOutlineWidth;
		outline-color: $layoutOutlineColor;
		outline-style: $layoutOutlineStyle;
	}

	#create-map {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
	}

	.heading {
		text-align: left;
		margin-left: 10px;
	}

	#city-search {
		outline-color: $layoutOutlineColor;
		outline-style: $layoutOutlineStyle;
		outline-width: $layoutOutlineWidth;
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