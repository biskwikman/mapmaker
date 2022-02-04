<script>
    import * as L from 'leaflet';
    import '../../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { place } from '../stores.js';
    import 'leaflet.vectorgrid';

    let div = null;

    const pbfUrl = 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf';

    const vectorTileOptions = {
        interactive: true,
        vectorTileLayerStyles: {
            boundary: {
                weight: 0.2,
                color: 'black'
            },
            coastline: {
                weight: 0.2,
                color: 'black'
            },
            contour: {
                weight: 0.2,
                color: 'brown'
            },
            boundary: {
                weight: 0.2,
                color: 'green'
            },
            label: {opacity: 0.0},
            symbol: {opacity: 0.0},
            river: {
                weight: 0.2,
                color: 'blue'
            },
            road: {
                weight: 0.2,
                color: 'black'
            },
            river: {
                weight: 0.2,
                color: 'blue'
            }
        }
    };

    onMount(() => {
        let map = L.map(div, {
            center: [17.385044, 78.486671],
            zoom: 10
        });

        const pbfLayer = L.vectorGrid.protobuf(pbfUrl,vectorTileOptions).on('click',function(e) {
            console.log(e.layer);
            L.DomEvent.stop(e);
        }).addTo(map);

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
    #map-container {
        float: left;
        position: relative;
        display: flex;
        justify-content: center;
        width: 60vw;
        height: 70vh;
    }

    .map-item {
        position: absolute;
        width: 80%;
        height: 100%;
    }

    #map {
        z-index: 1;
    }

    #map-cover {
        display: flex;
        justify-content: center;
        pointer-events: none;
        height: 50%;
        align-self: flex-end;
        background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
        z-index: 2;
    }

    #map-text {
        align-self: flex-end;
    }
</style>
<div id="map-container">
    <div id="map-cover" class="map-item">
        <div id="map-text">
            {#await $place}
                <h2>...waiting</h2>
            {:then place}
                <h2>{place[0].display_name.split(',')[0]}</h2>
                <h3>{place[0].lat}, {place[0].lon}</h3>
            {:catch error}
                <h2>{error.message}</h2>
            {/await}
        </div> 
    </div>
    <div bind:this={div} id='map' class="map-item"></div>
</div>