import axios from 'axios';
import { POKEMON_URL, POKEMON_TYPES }  from '../constantes'

export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES"

export const getPokemons = () => {
    return (dispatch) => {
        axios.get(POKEMON_URL)
        .then(res => { dispatch
            ({type: GET_POKEMON, payload: res.data})})
    }
    }


export const getTypes = () => {
    return(dispatch) => {
        axios.get(POKEMON_TYPES)
        .then(res => { dispatch
            ({type: GET_TYPES, payload: res.data})})
    }
}