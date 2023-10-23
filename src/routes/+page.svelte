<script>
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	export let data;
</script>

<Header />

<main>

<!-- {#each data.recepts as recept}
    <p>{recept.bereiding}</p>
{/each} -->

</main>

<style>
    body {
        background-color: beige;
    }
</style>