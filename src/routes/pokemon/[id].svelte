<script context="module">
    export async function load({page}){
        //get the id from url
        const id =  page.params.id;

        //api
        const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
       

        //get specific pokemon information
        const res =  await fetch(api);
        const pokemon =  await res.json();
       
        return {props: {pokemon}};
    }
</script>

<script>
    export let pokemon;
    let {name, height, weight, type, sprites} = pokemon;
</script>

<svelte:head>
	<title>Pokedex - {name}</title>
</svelte:head>


<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{name}</h1>
    <p>| Height: <strong>{height}</strong>
        | Weight: <strong>{weight} |</strong>
    </p>

    <img class="card-image" src={sprites['front_default']}  alt={name} />
</div>

