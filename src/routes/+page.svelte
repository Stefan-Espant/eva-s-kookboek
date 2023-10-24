<script>
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	export let data;
</script>

<Header />

<main>
    <section>
        <h1>Welkom in Eva's kookboek</h1>
        <h2>Alle recepten en inspiratie</h2>
        
    </section>

<!-- {#each data.recepts as recept}
    <p>{recept.bereiding}</p>
{/each} -->

</main>

<style>
    body {
        background-color: beige;
    }
</style>