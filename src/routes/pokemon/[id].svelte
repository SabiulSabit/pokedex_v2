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
    let {name} = pokemon;
</script>


<h1 class="text-4xl text-center my-8 uppercase">{name}</h1>