import { writable } from 'svelte/store';
import { asyncable } from 'svelte-asyncable';

let locationInput = 'tokyo';

export const place = asyncable(async () => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&limit=1&format=json`);
    const data = await response.json();
    return data;
});