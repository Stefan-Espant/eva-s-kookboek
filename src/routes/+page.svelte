<script>
	import Header from '$lib/components/header.svelte';
    import { onMount } from 'svelte';
    import { push } from 'svelte-spa-router';

    let searchQuery = '';

    // Functie om de zoekopdracht uit te voeren
    function performSearch() {
        // Hier kun je de zoeklogica implementeren, bijvoorbeeld een API-aanroep.
        // Vervang de volgende console.log met de echte zoeklogica.
        console.log('Zoekopdracht uitgevoerd:', searchQuery);

        // Navigeer naar een zoekresultatenpagina met behulp van svelte-spa-router.
        // Je kunt de zoekresultaten en zoekopdracht doorgeven aan de nieuwe pagina.
        push(`/search?q=${searchQuery}`);
    }

    // Eventhandler voor het indienen van het zoekformulier
    function handleSubmit(event) {
        event.preventDefault();
        performSearch();
    }

    export let data;
</script>
<Header />

<main>
    <section>
        <h1>Welkom in Eva's kookboek</h1>
        <h2>Alle recepten en inspiratie</h2>
        <form action="/" method="get">
            <button>
                <figure>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_23_418)">
                        <path d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="#FFCED7" stroke-opacity="0.92" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21L15 15" stroke="#FFCED7" stroke-opacity="0.92" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_23_418">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>   
                    <figcaption hidden>
                        Zoeken
                    </figcaption>
                </figure>
            </button>
            <input type="search" name="q" bind:value={searchQuery} />
            <label for="site-search" hidden>Search the site:</label>
        </form>
    </section>

    <section>
        <h2 hidden>Selecteer een maaltijd</h2>
        <nav>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    </section>

    <section>
        <h2 hidden>Selecteer een maaltijd</h2>

        {#each data.recepts as recept}
        <article>
            <img src={recept.image.url} width={recept.image.width} height={recept.image.height} alt="Afbeelding van {recept.titel}" />
            <h3>{recept.titel}</h3>
            <h4>Door: {recept.voornaam} {recept.achternaam}</h4>
            <a href="/recept/{recept.id}">Bekijk recept ›</a>
        </article>
        {/each}
    </section>

</main>

<style>
    main {
        background-color: var(--color-primary-40);
    }

    article {
        width: clamp(16rem, 100%, 20rem);
        background-color: var(--color-primary-25);
        border: var(--unit-nano) solid var(--color-primary-50);
        border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

    article a {
        color: var(--color-primary-75);
        padding: var(--unit-nano) var(--unit-micro);
        border-radius: var(--unit-nano);
        transition: var(--animation-default) ease-in-out;
    }

    article a:is(:hover, :focus) {
        background-color: var(--color-primary-40);
        color: var(--color-primary-100);
    }

    article img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        margin-bottom: var(--unit-small);
        border-radius: var(--unit-micro);
    }

    article h3 {
        color: var(--color-primary-100);
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        display: -webkit-box;
    }

    section:first-child {
        width: clamp(12rem, 100%, 30rem);
        margin: 0 auto;

    }

    input:is(:focus, :focus-visible) {
        border: var(--unit-nano) solid var(--color-primary-100);
    }
</style>