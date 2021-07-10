<script>
    import * as L from 'leaflet';
    import '../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { place } from './stores.js'

    let div = null;

    onMount(() => {
        let map = L.map(div, {
            center: [17.385044, 78.486671],
            zoom: 10
        });

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        map.fitBounds([
            ["20.2145811",
            "135.8536855"],
            ["35.8984245",
            "154.205541"]
        ]);

        place.subscribe(async () => {
            const returnedPlace = await $place;
            const elementToInsert1 = returnedPlace[0].boundingbox[2];
            const elementToInsert2 = returnedPlace[0].boundingbox[1];
            returnedPlace[0].boundingbox.splice(1,2,elementToInsert1,elementToInsert2);
            const bboxPart1 = returnedPlace[0].boundingbox.slice(0,2);
            const bboxPart2 = returnedPlace[0].boundingbox.slice(2,4);
            returnedPlace[0].boundingbox = [bboxPart1, bboxPart2]
            console.log('reterned place',returnedPlace[0]);
		    map.fitBounds(returnedPlace[0].boundingbox);
	    });
    });
</script>

<style lang='scss'>
    div {
        display: flex;
        align-items: center;
    }
</style>

<div bind:this={div} style="height: 50vh; width: 50%;"></div>