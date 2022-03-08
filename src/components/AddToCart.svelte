<script>
    import { toJpeg } from 'html-to-image';
    import { cart } from '../stores/stores.js';
    import { item } from '../stores/stores.js';
    import { map } from '../stores/stores.js';

    // make image of the map 
    const mapImage = () => 
        toJpeg(document.getElementById('map'), {quality: 0.50})
        .then(function (dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            $item.image = dataUrl;
        }).catch(function (error) {
            console.error('cart image creation error', error);
        });

    // add item to cart
    const onAddToCartClick = async () => {
        $map.removeControl($map.zoomControl);
        await mapImage();
        $map.addControl($map.zoomControl);
        const itemVal = Object.assign({},$item);
        $cart = [...$cart, itemVal];
    }
</script>

<style>
    button {
        height: 30px;
        margin-top: 10px;
    }
</style>

<button on:click={onAddToCartClick}>Add to cart</button>