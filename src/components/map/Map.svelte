<script>
    import * as L from 'leaflet';
    // import {Map, NavigationControl} from 'maplibre-gl';
    import * as htmlToImage from 'html-to-image';
    import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

    import '../../../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { place, item, map } from '../../stores/stores.js';

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
        L.tileLayer('http://localhost:8080/styles/toner/{z}/{x}/{y}@2x.webp').addTo($map);
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo($map);

        const getMapData = () => {
            $item.zoom = $map.getZoom();
            $item.bounds = $map.getBounds();
            $item.center = [$item.bounds.getCenter().lat, $item.bounds.getCenter().lng];
        }

        place.subscribe(async () => {
            const returnedPlace = await $place;
            const center = [returnedPlace.features[0].geometry.coordinates[1],returnedPlace.features[0].geometry.coordinates[0]];
            $item.center = center;
            $item.placeName = returnedPlace.features[0].text;
            $item.countryName = returnedPlace.features[0].context[returnedPlace.features[0].context.length-1].text
            $map.flyTo(center, 11);
	    });

        $map.on('zoomend', function() {
            getMapData();
        });

        $map.on('moveend', function() {
            getMapData();
        });

        document.getElementById("city-text").addEventListener("input", function() {
        }, false);

    });
</script>

<style lang='scss'>
    $mapHeight: 95%;

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