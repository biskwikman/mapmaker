<script>
import { cart } from '../stores/stores.js';

</script>

<style lang='scss'>
    #header {
        height: 7vh;
        width: 100%;
        background-color: rgb(200, 217, 226);
        box-shadow: 0px 7px 5px rgba(98, 107, 110, 0.377);
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 100;
    }

    img {
        width: 150%;
    }
</style>

<div id='header'>
    <a href="/"><p>Mappuri</p></a>
    <a href="/cart">
    {#if $cart.length == 0}
        <img src="images/cart.svg" alt="shopping cart">
    {:else}
        <img src="images/cart-full.svg" alt="shopping cart">
    {/if}
    </a>
</div>
