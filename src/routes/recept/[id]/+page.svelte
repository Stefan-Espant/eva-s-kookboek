<script>
    import Header from '$lib/components/header.svelte';
    import { onMount } from 'svelte';

    export let data;

    console.log(data)
  </script>
  
  <Header />

  <h1>{data.recept.titel}</h1>
  

  