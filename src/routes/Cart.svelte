<script>
import Navbar from '../components/Navbar.svelte';
import CartItems from '../components/CartItems.svelte';
import { cart } from '../stores/stores.js';

//Send car to server and get cart back
const getMap = async () => {
    let res = await fetch('/getMap', {
        method: 'POST',
        body: JSON.stringify($cart),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let jsonRes = await res.json();
    console.log(jsonRes);
}

</script>

<main>
	<Navbar/>
    <CartItems/>
    <a href='/inputdetails'><button>Confirm Selection</button></a>
    <button on:click={getMap}>Get Map</button>
</main>