import axios from 'axios';
import { POKEMON_URL, POKEMON_TYPES, POKEMON_QUERY }  from '../constantes'

export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES"
export const GET_BY_NAME = "GET_BY_NAME"
export const POST_POKEMON = "POST_POKEMON"
export const FILTERED_BY_TYPES = "FILTERED_BY_TYPES"
export const FILTERED_BY_ORIGIN = "FILTERED_BY_ORIGIN"
export const FILTERED_BY_NAME = "FILTERED_BY_NAME"
export const FILTERED_BY_POWER = "FILTERED_BY_POWER"


export const getPokemons = () => {
    return async(dispatch) => {
        await axios.get(POKEMON_URL)
        .then(res => { dispatch
            ({type: GET_POKEMON, payload: res.data})})
    }
    }


export const getTypes = () => {
    return async(dispatch) => {
        try {
            await axios.get(POKEMON_TYPES)
            .then(res => { dispatch
            ({type: GET_TYPES, payload: res.data})})
        } catch(error) {
            console.log('Pokemons no encontrados')
        }
    }
}

export const filteredByTypes = (payload) => {
        return {
            type: FILTERED_BY_TYPES,
            payload
        }
}

export const filteredByOrigin = (payload) => {
    return {
        type: FILTERED_BY_ORIGIN,
        payload
    }
}

export const filterByName = (payload) => {
    return {
        type: FILTERED_BY_NAME,
        payload
    }
}

export const filterByPower = (payload) => {
    return {
        type: FILTERED_BY_POWER,
        payload
    }
}

export const getPokemonsByName = (payload) => {
    return async(dispatch) => {
        try {
            await axios.get(POKEMON_QUERY + payload)
            .then(res => { dispatch
            ({type: GET_BY_NAME,
            payload:res.data })
            })
        } catch(error) {
            console.log('Pokemon no encontrado')
        }
    }
}

export const createPokemon = (payload) => {
    return async(dispatch) => {
        try {
            const response = await axios.post(POKEMON_URL, payload)
            return response
        } catch(error) {
            console.log('La PokeCreator está fuera de servicio, intente más tarde')
        }
    }
};