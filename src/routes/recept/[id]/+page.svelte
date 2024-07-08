<script>
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	export let data;
</script>

<Header />

<main style="background-color: {data.recept.achtergrondkleur.hex}">
<section>
    <img src={data.recept.image.url} width={data.recept.image.width} height={data.recept.image.height}  alt="Afbeelding van {data.recept.titel}" />

    <h1 style="color: {data.recept.titelkleur.hex}">{data.recept.titel}</h1>
    <p style="color: {data.recept.titelkleur.hex}">Door: {data.recept.voornaam} {data.recept.achternaam}</p>

    <ul class="receipe-info">
        <!-- Aantal personen -->
        <li style="color: {data.recept.titelkleur.hex}">
            <figure>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_169)">
                <path d="M5 7C5 8.06087 5.42143 9.07828 6.17157 9.82843C6.92172 10.5786 7.93913 11 9 11C10.0609 11 11.0783 10.5786 11.8284 9.82843C12.5786 9.07828 13 8.06087 13 7C13 5.93913 12.5786 4.92172 11.8284 4.17157C11.0783 3.42143 10.0609 3 9 3C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7Z" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1_169">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <figcaption>
                    Aantal personen:
                </figcaption>
            </figure>
        {data.recept.aantalPersonen}
        </li>
        <!-- Bereidingstijd -->
        <li style="color: {data.recept.titelkleur.hex}">
            <figure>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_175)">
                    <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 7V12L15 15" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_175">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>   
                    <figcaption>
                        Bereidingstijd:
                    </figcaption>                 
            </figure>
            {data.recept.bereidingstijd} minuten
        </li>
        <li style="color: {data.recept.titelkleur.hex}">
            <figure>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_59_4)">
                    <path d="M19 15V3C14.184 7.594 13.977 11.319 14 15H19ZM19 15V21H18V18M8 4V21M5 4V7C5 7.79565 5.31607 8.55871 5.87868 9.12132C6.44129 9.68393 7.20435 10 8 10C8.79565 10 9.55871 9.68393 10.1213 9.12132C10.6839 8.55871 11 7.79565 11 7V4" stroke="#D47E8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_59_4">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <figcaption>
                    Maaltijd:
                </figcaption>
            </figure>
            Diner
        </li>
    </ul>
    <h2 hidden>Ingrediënten</h2>
    <ul>
        {#each data.recept.ingredienten as ingredient}
            <li style="color: {data.recept.titelkleur.hex}">
                {ingredient}
            </li>
        {/each}
    </ul>
        <h2 style="color: {data.recept.titelkleur.hex}">Bereiding:</h2>
        <p style="color: {data.recept.titelkleur.hex}">{data.recept.bereiding}</p>
    </section>
</main>

<style>
    section {
        display: grid;
        gap: var(--unit-default);

    }

    img, .receipe-info {
        border: 2px solid #D1B599;
        border-radius: var(--unit-small);
    }

	img {
		width: clamp(var(--unit-deca), 100%, 22.5rem);
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
	}

    .receipe-info {
        width: clamp(var(--unit-deca), 100%, 21.5rem);
        margin: auto;
        background-color: #FFFBEE;
        padding: var(--unit-micro);
        display: flex;
        flex-direction: column;
        gap: var(--unit-micro);
    }

    li {
        display: grid;
        align-items: center;
        gap: var(--unit-small);
        grid-template-columns: 3fr 2fr;
        font-size: var(--unit-default);
        margin-bottom: 0;
    }

    li figure {
        display: flex;
        gap: var(--unit-micro)
    }

    h2 {
        margin-bottom: 0;
    }
</style>
