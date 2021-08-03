import {writable} from "svelte/store";

export const pokemon =  writable([]);

const getPokemons = async () =>{
    //api info
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

    //update poken data in writable data
    pokemon.set(loadedPokemon);

}


getPokemons();