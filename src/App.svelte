<script>
	import router from 'page';

	import Home from './routes/Home.svelte';
	import Cart from './routes/Cart.svelte';
	import InputDetails from './routes/InputDetails.svelte';

	let page;
	let params;

	router('/', () => (page = Home));
	router('/cart', () => (page = Cart));
	router('/inputdetails', () => (page = InputDetails));
	router.start();


</script>

<svelte:component this="{page}" params="{params}" />
