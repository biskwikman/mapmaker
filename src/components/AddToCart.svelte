<script>
    import { cart } from '../stores/stores.js';
    import { item } from '../stores/stores.js';

    const onAddToCartClick = () => {
        const itemVal = Object.assign({},$item);
        $cart = [...$cart, itemVal];
        console.log($cart);
    }
</script>

<style>
    button {
        height: 30px;
        margin-top: 10px;
    }
</style>

<button on:click={onAddToCartClick}>Add to cart</button>