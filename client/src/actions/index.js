import axios from 'axios';
import { POKEMON_URL, POKEMON_TYPES, POKEMON_QUERY }  from '../constantes'





export const POST_POKEMON = "POST_POKEMON"
export const FILTERED_BY_TYPES = "FILTERED_BY_TYPES"
export const FILTERED_BY_ORIGIN = "FILTERED_BY_ORIGIN"
export const FILTERED_BY_NAME = "FILTERED_BY_NAME"
export const FILTERED_BY_POWER = "FILTERED_BY_POWER"



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
