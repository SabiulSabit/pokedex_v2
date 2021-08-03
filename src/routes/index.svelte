<script context="module" lang="ts">
  export const prerender = true;

  export async function load() {
    const limit = 100;
    const api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    
    //commect with api
    const res = await fetch(api);

    //extract data
    const data =  await res.json(); 
    const loadedPokemon = data.results.map((p, i)=> {
        return {
            name: p.name,
            id: i + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                i + 1
            }.png`
        }
    })

    return {props: {pokemon: loadedPokemon}}
  }
</script>

<script>
  import PokemonCard from "../lib/pokemonCard.svelte";
  export let pokemon;
  //console.log(pokemons);
  let searchKey = "";
  let filteredData = [];

  //searchKey on chnage
  $: {
    if (searchKey) {
      // if search key exists
      filteredData = pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    } else {
      // if search key is empty
      filteredData = [...pokemon];
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
