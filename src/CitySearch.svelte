<script>
    import Map from './Map.svelte';
    import { bboxResponse } from './stores.js'

    let locationInput = 'tokyo';
    let bbox;
    bboxResponse.subscribe(value => {
        console.log('value1', value)
        bbox = value;
        console.log('bbox1', bbox)
    });
    let test;
    async function getPlace() {
        let response = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&limit=1&format=json`);
        let data = await response.json();
        let returnedBbox = data[0].boundingbox;
        console.log('data', data);
        
        bboxResponse.set(returnedBbox);
        console.log('returned data bbox ', returnedBbox)
        console.log('store: ', $bboxResponse);

        if (response.ok == true) {
            return data;
        } else {
            throw new Error(text);
        }
    }

    let promise = getPlace();

    function handleClick() {
		promise = getPlace();
    }
    
</script>

<p>the bbox is {bbox}</p>
<input bind:value={locationInput} placeholder="enter a city or country">
<button on:click={handleClick}>Search</button>
{#await promise}
    <p>...waiting</p>
{:then place}
    <p>{place[0].display_name}</p>
{:catch error}
    <p>{error.message}</p>
{/await}

<Map/>