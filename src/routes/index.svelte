<script context="module" lang="ts">
  export const prerender = true;

  //get the pokemons data and subscribe it in a variable
  let pokemons;
  import { pokemon } from "../stores/pokeStore.js";
  pokemon.subscribe((value) => {
    pokemons = value;
  });

  //console.log(pokemons);
</script>

<script>
  import PokemonCard from "../lib/pokemonCard.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to Pokedex</h1>

<section>
  <!-- Show Pokemon Information -->
  <div class="py-4 grid gap-3 md:grid-cols-3 grid-cols-1">
    {#each pokemons as p}
      <PokemonCard pokemon={p} />
    {/each}
  </div>
  <!-- Show Pokemon Information -->
</section>

<style>
  /* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	} */
</style>
