<script>
    //get the single pokemon
    export let pokemon;
    let {name, id, image} = pokemon;
</script>

<!-- Show the pokemon data -->
<a class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${id}`}>
    <img class="h-40 w-40" src={image} alt={name}>
    <h1> {id}.  {name}  </h1>
</a>
<!-- Show the pokemon data -->


<style>

</style>