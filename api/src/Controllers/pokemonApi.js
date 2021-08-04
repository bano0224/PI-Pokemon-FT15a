const axios = require('axios');
const {POKEMON_URL} = require('../constantes');

/* async function getPokemonApi(req, res, next) {
    res.send('funcionando'); */
    /* try {
    const pokeApiFirst = await axios.get(`${POKEMON_URL}`) //traigo a mi base de datos los primeros pokemon
    const pokeApiSecond = await axios.get(pokeApiFirst.data.next)
    Promise.allres.json([pokeApiFirst, pokeApiSecond]) //hago un promise.all y de esta manera espero a que hayan concluido con éxito las consultas de las promesas anteriores
        .then((response) => {
            console.log("ESTE ES EL RESPONSEEEEEEEE",response)
            let [pokeApiFirstRes, pokeApiSecondRes] = response //traigo cada una de las respuestas en un array
            return res.json(pokeApiFirstRes.concat(pokeApiSecondRes)) //concateno ambos arrays para que me traiga los 40 pokemon
        })
    }
    catch(err){ next(err) };//control de errores en caso de que algo no funcione de forma correcta */


const getPokemonApi = async () => {
    const pokeApiFirst = await axios.get(`${POKEMON_URL}`);
    const pokeApiSecond = await axios.get(pokeApiFirst.data.next);
    const pokeInfo = pokeApiFirst.data.results.concat(pokeApiSecond.data.results);
    try {
        const pokeMap = pokeInfo.map(pokemon => axios.get(pokemon.url))
        let pokeDex = Promise.all(pokeMap)
        .then(pokemon => {
            let pokeData = pokemon.map(pokemon => pokemon.data)
            let pokemons = []
            pokeData.map(pokemon => {
                pokemons.push({
                    id: pokemon.id,
                    name: pokemon.name,
                    hp: pokemon.stats[0].base_stats,
                    attack: pokemon.stats[1].base_stats,
                    defense: pokemon.stats[2].base_stats,
                    speed: pokemon.stats[5].base_stats,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    sprite: pokemon.sprites.other.dream_world.front_defult,
                    types: pokemon.types.map(el => el)
                })
            })
            return pokemons;
        })
        return pokeDex;
    } catch(err) {
        return (err)
    }
};


module.exports = getPokemonApi