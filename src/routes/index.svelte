<script context="module" lang="ts">
  export const prerender = true;
  //get the pokemons data and subscribe it in a variable
  let pokemons;
  import { pokemon } from "../stores/pokeStore.js";
  pokemon.subscribe((value) => {
    pokemons = value;
  });
</script>

<script>
  import PokemonCard from "../lib/pokemonCard.svelte";

  //console.log(pokemons);
  let searchKey = "";
  let filteredData = [];

  //searchKey on chnage
  $: {
    if (searchKey) {
      // if search key exists
      filteredData = pokemons.filter((p) =>
        p.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    } else {
      // if search key is empty
      filteredData = [...pokemons];
    }
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to Pokedex</h1>

<input
  bind:value={searchKey}
  class="w-full rouded-md text-lg p-4 border-2 border-gray=200"
  type="text"
  placeholder="Search Pokemon"
/>

<section>
  <!-- Show Pokemon Information -->
  <div class="py-4 grid gap-3 md:grid-cols-3 grid-cols-1">
    {#each filteredData as p}
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
