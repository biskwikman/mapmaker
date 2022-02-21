<script>
import Navbar from '../components/Navbar.svelte';
import CartItems from '../components/CartItems.svelte';
import { cart } from '../stores/stores.js';

const getMap = async () => {
    const res = await fetch('/getMap', {
        method: 'POST',
        body: JSON.stringify($cart),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // I think this part is wrong
    const json = await res;
    console.log(json);
}

</script>

<main>
	<Navbar/>
    <CartItems/>
    <a href='/inputdetails'><button>Confirm Selection</button></a>
    <button on:click={getMap}>Get Map</button>
</main>