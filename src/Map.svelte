<script>
    import * as L from 'leaflet';
    import '../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { bboxResponse } from './stores.js'

    let div = null;

    onMount(() => {
        let map = L.map(div, {
            center: [17.385044, 78.486671],
            zoom: 10
        });

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        bboxResponse.subscribe(bounds => {
		map.fitBounds(bounds);
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