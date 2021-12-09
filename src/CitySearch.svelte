<script>
    import { place } from './stores/stores.js';
    import { cart } from './stores/stores.js';

    let locationInput = 'tokyo';

    const onSearchClick = async () => {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${locationInput}.json?types=region,place&limit=1&access_token=pk.eyJ1IjoibmlnaHRsZXkiLCJhIjoiY2lpZWt4cG5xMDFkNXVia3NvYnEzZXI3bCJ9.YBKDRzU7G2AzGMjj2RV2Zg`);
        // const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&limit=1&format=json`);
        const data = await response.json();
        place.set(data);
    }
    const onEnter = e => {
        if (e.charCode === 13) onSearchClick();
    }

    const onAddToCartClick = () => {
        cart.update(n => {
        console.log('test');
        console.log(n);
        })
    }
    
</script>

<style>
    #container {
        margin: 20px 20px 20px 20px;
    }
</style>
<div id='container'>
<input 
    bind:value={locationInput} 
    on:keypress={onEnter}
    placeholder="enter a city or country"
/>
<button on:click={onSearchClick}>Search</button>
{#await $place}
    <p>...waiting</p>
{:then place}
    <p>{place[0]}</p>
{:catch error}
    <p>{error.message}</p>
{/await}

<button on:click={onAddToCartClick}>Add to cart</button>
</div>