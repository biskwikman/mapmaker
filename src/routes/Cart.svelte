<script>
import Navbar from '../components/Navbar.svelte';
import CartItems from '../components/CartItems.svelte';
import { cart } from '../stores/stores.js';

const getMap = async () => {
    const res = await fetch('/getMap.js', {
        method: 'POST',
        body: JSON.stringify($cart)
    })
    const json = await res.json()
}

</script>

<main>
	<Navbar/>
    <CartItems/>
    <a href='/inputdetails'><button>Confirm Selection</button></a>
    <button on:click={getMap()}>Get Map</button>
</main>