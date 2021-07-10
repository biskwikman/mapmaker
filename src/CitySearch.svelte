<script>
    import Map from './Map.svelte';
    import { place } from './stores.js';

    let locationInput = 'tokyo';

    const handleClick = async () => {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&limit=1&format=json`);
        const data = await response.json();
        place.set(data);
    }

    const subscription = place.subscribe(async () => {
        console.log('subscribe', await $place);
        return await $place;
    });
    
</script>

<input bind:value={locationInput} placeholder="enter a city or country">
<button on:click={handleClick}>Search</button>
{#await $place}
    <p>...waiting</p>
{:then place}
    <p>{place[0].display_name}</p>
{:catch error}
    <p>{error.message}</p>
{/await}

<Map/>