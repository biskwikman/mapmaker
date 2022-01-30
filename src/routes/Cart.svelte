<script>
import Navbar from '../components/Navbar.svelte';
import CartItems from '../components/CartItems.svelte';
import { cart } from '../stores/stores.js';

</script>

<main>
	<Navbar/>
    <CartItems/>
</main>