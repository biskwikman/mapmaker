<script>
	import router from 'page';

	import Home from './routes/Home.svelte';
	import Cart from './routes/Cart.svelte';

	let page;
	let params;

	router('/', () => (page = Home));
	router('/cart', () => (page = Cart));
	router.start();


</script>

<svelte:component this="{page}" params="{params}" />
