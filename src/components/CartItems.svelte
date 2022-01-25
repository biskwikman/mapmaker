<script>
import { cart } from '../stores/stores.js';

let cartFilled = false;

let lon,lat,zoom;

if ($cart.length >= 1) {
    cartFilled = true;
    lon = $cart[0].center[1];
    lat = $cart[0].center[0];
    zoom = $cart[0].zoom;
} else cartFilled = false;

console.log('cart',$cart);
</script>

{#if cartFilled === true}
<img alt='first item in cart' src='http://localhost:8080/styles/toner/static/{lon},{lat},{zoom}/210x297@2x.jpg'>
{/if}