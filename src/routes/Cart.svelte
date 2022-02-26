<script>
import Navbar from '../components/Navbar.svelte';
import CartItems from '../components/CartItems.svelte';
import { cart } from '../stores/stores.js';

//Need to filter out image from cart here and put in a new variable to send to server

//Send car to server and get cart back
const getMap = async () => {
    console.log($cart);
    let res = await fetch('/getMap', {
        method: 'POST',
        //Sending from cart for now
        body: JSON.stringify({zoom: $cart[0].zoom, center: $cart[0].center}),
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