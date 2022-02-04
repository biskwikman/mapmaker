<script>
import Navbar from '../components/Navbar.svelte';

import { emailValidator, requiredValidator } from '../tools/validator/validators.js';
import { createFieldValidator } from '../tools/validator/validation.js';

const [ validity, validate ] = createFieldValidator(requiredValidator(), emailValidator())

let email = null;
</script>

<main>
	<Navbar/>
	<form action="">
		<p>User Email</p>
		<input 
			class='input' 
			type='email' 
			bind:value={email} 
			placeholder="Your Email" 
			class:field-danger={!$validity.valid}
			class:field-success={$validity.valid}
			use:validate={email}
			required />
		<p>Confirm Email</p>
		<input type="email" required />
	</form>
</main>

<style>

input {
	outline: none;
	border-width: 2px;
}

.field-danger {
	border-color: red;
}
	
.field-success {
	border-color: green;
}

</style>