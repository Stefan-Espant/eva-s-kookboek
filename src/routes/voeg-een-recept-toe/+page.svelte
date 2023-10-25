<script>
	import Header from '$lib/components/header.svelte';
</script>

<Header />
<main>
    <h1>
        Voeg een recept toe
    </h1>
    <form method="post" action="/">
        <fieldset>
            <legend hidden>Persoonlijke gegevens</legend>
            <input for="sirname" type="text" required />
            <label name="sirname" id="sirname">Achternaam</label>
            <input for="firstname" type="text" required />
            <label name="firstname" id="firstname">Voornaam</label>
        </fieldset>
        <fieldset>
            <legend hidden>Recept gegevens</legend>     
            <textarea for="preparation" type="" required />
            <label name="preparation" id="preparation">Bereiding</label>
            
        </fieldset>
    </form>
</main>

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    fieldset {
        display: flex;
        flex-direction: column-reverse;
        border: 0;
    }

    input, textarea {
        border: var(--unit-nano) solid var(--color-primary-50);
        border-radius: var(--unit-small);
    }

    label {
        color: var(--color-primary-100);
    }
</style>