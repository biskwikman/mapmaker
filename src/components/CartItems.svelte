<script>
import { cart } from '../stores/stores.js';

let cartFilled = false;

let lon,lat,zoom;

if ($cart.length >= 1) {
    cartFilled = true;
} else cartFilled = false;

</script>

{#if cartFilled === true}
{#each $cart as item, i}
<span>
    <!-- multiple items all have center on tokyo for some reason -->
   {i} <img class='cart-item' alt='first item in cart' src='http://localhost:8080/styles/toner/static/{item.center[1]},{item.center[0]},{item.zoom}/210x297@2x.jpg'>
</span>
{/each}
{/if}

<style>
    span {
        display: inline-block;
    }
    .cart-item {
        margin: 10px;
        width: 50%;
    }
</style>