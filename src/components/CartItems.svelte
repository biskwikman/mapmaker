<script>
import { cart } from '../stores/stores.js';

let cartFilled = false;

if ($cart.length >= 1) {
    cartFilled = true;
} else cartFilled = false;

</script>

<h2>Your cart</h2>
<div id='cart-container'>
{#if cartFilled === true}
{#each $cart as item, i}    
<span>
    <img class='cart-item' alt='first item in cart' src={$cart[i].image}>
    <!-- <img class='cart-item' alt='first item in cart' src='http://localhost:8080/styles/toner/static/{item.center[1]},{item.center[0]},{item.zoom}/210x297@2x.jpg'> -->
</span>
{/each}
{:else}
<h4>Your cart is empty</h4>
{/if}
</div>

<style>
    span {
        display: inline-block;
    }
    .cart-item {
        margin: 40px;
        width: 200px;
        box-shadow: 0px 0px 10px 5px rgb(151, 151, 151);
    }
    #cart-container {
        display: flex;
        flex-direction: column;
    }
</style>