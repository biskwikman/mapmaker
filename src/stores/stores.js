import { writable } from 'svelte/store';
import { asyncable } from 'svelte-asyncable';

let locationInput = 'tokyo';

export const place = asyncable(async () => {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${locationInput}.json?types=region,place&limit=1&access_token=pk.eyJ1IjoibmlnaHRsZXkiLCJhIjoiY2lpZWt4cG5xMDFkNXVia3NvYnEzZXI3bCJ9.YBKDRzU7G2AzGMjj2RV2Zg`);
    // const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&limit=1&format=json`);
    const data = await response.json();
    return data;
});

export const cart = writable([]);

export const item = writable({});

export const layout = writable({
    lineLength: 'line-short',
    backgroundStyle: 'overlay-solid'
});

export const map = writable();