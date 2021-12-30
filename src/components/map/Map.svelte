<script>
    import * as L from 'leaflet';
    import '../../../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { place, item, map } from '../../stores/stores.js';
    import { get } from "svelte/store";

    import Layout from './Layout.svelte';

    let div = null;

    onMount(() => {
        $map = L.map(div, {
            center: [35.68, 139.77],
            zoom: 11,
        });

        // Remove attribution
        document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

        // Tiles
        // L.tileLayer('http://localhost:8080/styles/basic-preview/{z}/{x}/{y}.png').addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo($map); //osm

        place.subscribe(async () => {
            const returnedPlace = await $place;
            console.log(returnedPlace);
            const center = [returnedPlace.features[0].geometry.coordinates[1],returnedPlace.features[0].geometry.coordinates[0]];
            $item.center = center;
            $item.placeName = returnedPlace.features[0].text;
            $item.countryName = returnedPlace.features[0].context[returnedPlace.features[0].context.length-1].text
            $map.flyTo(center, 11);
	    });

        $map.on('zoomend', function() {
            $item.zoom = $map.getZoom();
            console.log(get(item));
        });

        document.getElementById("city-text").addEventListener("input", function() {
            console.log($item.placeName);
        }, false);

    });
</script>

<style lang='scss'>
    $mapHeight: 80%;

    #map {
        display: flex;
        align-items: center;
        height: $mapHeight;
        aspect-ratio: 1/1.4142;
    }

</style>

<div id='map' bind:this={div}>     
    <Layout/>
</div>