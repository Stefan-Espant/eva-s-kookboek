<script>
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	let status = "";
	const handleSubmit = async (event) => {
	  event.preventDefault();
	  status = 'Submitting...';
	  const formData = new FormData(event.currentTarget);

	  // Collect all ingredients into an array and append them to the FormData
	  const ingredients = [];
	  formData.forEach((value, key) => {
	    if (key === "ingredients[]") {
	      ingredients.push(value);
	    }
	  });
	  formData.delete("ingredients[]");
	  formData.append("ingredients", JSON.stringify(ingredients));

	  const response = await fetch("https://api.web3forms.com/submit", {
		  method: "POST",
		  body: formData
	  });
	  const result = await response.json();
	  if (result.success) {
		  console.log(result);
		  status = result.message || "Success";
	  } else {
		  status = result.message || "Error";
	  }
	};

	onMount(() => {
		document.getElementById('addIngredient').addEventListener('click', (event) => {
			event.preventDefault();
			const ingredientContainer = document.getElementById('ingredient-container');
			const ingredientInput = document.createElement('input');
			ingredientInput.name = 'ingredients[]';
			ingredientInput.className = 'ingredient';
			ingredientInput.required = true;
			ingredientContainer.appendChild(ingredientInput);
		});
	});
</script>

<Header />

<main>
	<section class="form-receipe">
		<h1>Voeg een recept toe</h1>
		<form on:submit={handleSubmit}>
			<input type="hidden" name="access_key" value="0a5e7d29-77df-48fc-ae6f-2e4afe58dc25">
			<fieldset>
				<legend>Persoonlijke gegevens</legend>
				<label for="firstname">
					Voornaam:
					<input type="text" name="firstname" required />
				</label>
				<label for="sirname">
					Achternaam:
					<input type="text" name="sirname" required />
				</label>
				<label for="email">
					E-mail:
					<input type="email" name="email" required />
				</label>
			</fieldset>
			<fieldset>
				<legend>Recept</legend>
				<label for="title">
					Titel:
					<input type="text" name="title" required />
				</label>
				<label for="ingredients">
					Ingrediënten:
					<div id="ingredient-container">
						<input name="ingredients[]" class="ingredient" required />
					</div>
					<button id="addIngredient">+ Voeg een ingrediënt toe</button>
				</label>
				<label for="preparationTime">
					Bereidingstijd:
					<input type="time" name="preparationTime" required />
				</label>
				<label for="persons">
					Aantal personen:
					<input type="number" name="persons" required />
				</label>
				<label for="preparation">
					Bereiding:
					<textarea name="preparation" required></textarea>
				</label>
			</fieldset>
			<fieldset>
				<legend>Stijling</legend>
				<label for="textColour">
					Titelkleur:
					<input type="color" name="textColour" required />
				</label>
				<label for="accentColour">
					Accentkleur:
					<input type="color" name="accentColour" required />
				</label>
				<label for="backgroundColour">
					Achtergrondkleur:
					<input type="color" name="backgroundColour" required />
				</label>
			</fieldset>
			<button type="submit">Verzenden</button>
		</form>
	</section>
	<div>{status}</div>
</main>

<style>
	main {
		min-height: 100vh;
		background-color: var(--color-primary-40);
	}

	h1 {
		margin-bottom: 1rem;
	}

	form {
		width: fit-content;
		display: flex;
		flex-direction: column;
		margin: auto;
	}

	fieldset {
		background-color: #FFE0E6;
		flex-direction: column;
		padding: 1rem;
		border: none;
		border-radius: 0.75rem;
	}

	fieldset:last-of-type {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	legend {
		color: var(--color-primary-100);
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		color: var(--color-primary-100);
	}

	input, .ingredient,  textarea {
		margin-bottom: 1rem;
		border: 2px solid #FFA7B7;
		padding: 0.5rem;
		border-radius: var(--unit-small);
	}

	.ingredient:not(:first-child) {
		opacity: 0;
		animation: appear 0.3s 2.5s forwards;
	}

	button {
		align-self: start;
		margin-bottom: 1rem;
	}

	@media (min-width: 30rem) {
		form {
			width: 20rem;
			display: flex;
			flex-direction: column;
			margin: auto;
		}	
	}

	@media (min-width: 40rem) {
		form {
			width: 30rem;
		}
	}	

	@keyframes appear {
		to {
			opacity: 1;
		}
	}
</style>
