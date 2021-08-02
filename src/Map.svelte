<script>
    import * as L from 'leaflet';
    import '../node_modules/leaflet/dist/leaflet.css';
    import { onMount } from 'svelte';
    import { place } from './stores.js';
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

        // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
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
    #grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
    .map-item {
        grid-column: 2 / 12;
        grid-row: 1 / 4;
        width: 100%;
    }

    #map {
        z-index: 1;
    }

    #map-cover {
        pointer-events: none;
        background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
        z-index: 2;
    }
</style>
<!-- <div id="grid"> -->
    <div id="map-cover" class="map-item"></div>
    <div bind:this={div} id='map' class="map-item"></div>
<!-- </div> -->