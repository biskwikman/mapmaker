<script>
    import * as L from 'leaflet';
    import '../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { place } from './stores/stores.js'
    import { item } from './stores/stores.js';
    import { get } from "svelte/store";

    let div = null;

    onMount(() => {
        let map = L.map(div, {
            center: [35.68, 139.77],
            zoom: 11
        });

        document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

        L.tileLayer('http://localhost:8080/styles/basic-preview/{z}/{x}/{y}.png').addTo(map);

        // use map.flyTo(LatLng)
        place.subscribe(async () => {
            const returnedPlace = await $place;
            const center = [returnedPlace.features[0].geometry.coordinates[1],returnedPlace.features[0].geometry.coordinates[0]];
            $item.center = center;
            map.flyTo(center, 11);
	    });

        map.on('zoomend', function() {
            $item.zoom = map.getZoom();
            console.log(get(item));
        });

    });
</script>

<style lang='scss'>
    #map {
        display: flex;
        align-items: center;
        height: 70%;
        aspect-ratio: 1/1.4142;
    }
</style>

<div id='map' bind:this={div}></div>