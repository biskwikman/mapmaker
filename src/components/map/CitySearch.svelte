<script>
    import { place } from '../../stores/stores.js';

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
    
</script>

<style>
    #container > * {
        float: left;
        margin-left: 10px;
        height: 30px;
    }
</style>
<div id='container'>
<input 
    bind:value={locationInput} 
    on:keypress={onEnter}
    placeholder="enter a city or country"
/>
<button on:click={onSearchClick}>Search</button>
</div>