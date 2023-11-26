<script>
	import { onMount } from 'svelte';
	import { hygraph } from '$lib/utils/hygraph.js';
	import Header from '$lib/components/header.svelte';

	let sirname = '';
	let firstname = '';
	let preparation = '';
	let ingredients = '';
	let preparationTime = '';
	let amountOfPeople = '';
	let recipeTitle = '';

	async function handleSubmit(event) {
		event.preventDefault();

		// Verzamel gegevens uit het formulier
		const formData = {
			sirname,
			firstname,
			preparation,
			ingredients,
			preparationTime,
			amountOfPeople,
			recipeTitle
		};

		// Verzend gegevens naar Hygraph
		try {
			await sendFormDataToHygraph(formData);

			// Voeg hier eventueel logica toe na een succesvolle verzending, bijvoorbeeld een melding tonen
		} catch (error) {
			// Voeg hier eventueel logica toe bij fouten, bijvoorbeeld het tonen van een foutmelding
			console.error('Fout bij het verzenden van formuliergegevens naar Hygraph:', error);
		}
	}

	async function sendFormDataToHygraph(formData) {
		// Stel je GraphQL-mutatie samen op basis van je Hygraph-schema
		const mutation = `
        mutation AddRecipe($input: RecipeInput!) {
          addRecipe(input: $input) {
            query Recepts {
                recepts {
                  aantalPersonen
                  accentkleur {
                    hex
                  }
                  achtergrondkleur {
                    hex
                  }
                  achternaam
                  bereiding
                  bereidingstijd
                  createdAt
                  id
                  ingredienten
                  publishedAt
                  titel
                  uid
                  updatedAt
                  voornaam
                  image {
                    url
                  }
                }
            }
        }
      `;

		// Vervang de placeholder met de daadwerkelijke gegevens uit het formulier
		const variables = {
			input: formData
		};

		// Verzend de GraphQL-mutatie naar Hygraph
		await hygraph.request(mutation, variables);
	}
</script>

<Header />

<main>
	<h1>Voeg een recept toe</h1>
	<form method="post" action="/voeg-een-recept-toe" on:submit={handleSubmit}>
		<fieldset>
			<legend hidden>Persoonlijke gegevens</legend>
			<input name="sirname" type="text" required />
			<label for="sirname" id="sirname">Achternaam</label>
			<input name="firstname" type="text" required />
			<label for="firstname" id="firstname">Voornaam</label>
		</fieldset>
		<fieldset>
			<legend hidden>Recept gegevens</legend>
			<button type="submit">Verzenden</button>
			<legend hidden>Recept gegevens</legend>
			<textarea for="preparation" type="" required />
			<label for="preparation" id="preparation">Bereiding</label>
			<textarea name="ingredients" required />
			<label for="ingredients">Ingrediënten</label>
			<input name="Preparation-time" type="time" required />
			<label for="Preparation-time" id="Preparation-time">Bereidingstijd</label>
			<input name="amout-of-people" type="number" required />
			<label for="amout-of-people" id="amout-of-people">Aantal personen</label>
			<input name="receipe-title" type="text" required />
			<label for="receipe-title" id="receipe-title">Titel recept</label>
		</fieldset>
	</form>
</main>

<style>
	main {
		background-color: var(--color-primary-40);
	}

	form {
		display: flex;
		flex-direction: column;
	}

	fieldset {
		display: flex;
		flex-direction: column-reverse;
		border: 0;
		padding-bottom: var(--unit-default);
	}

	fieldset:first-child {
		padding-top: var(--unit-default);
	}

	input,
	textarea {
		border: var(--unit-nano) solid var(--color-primary-50);
		border-radius: var(--unit-small);
		height: 2.75rem;
		padding: var(--unit-pico) var(--unit-small);
		margin-bottom: var(--unit-small);
	}

	label {
		color: var(--color-primary-100);
	}
</style>
