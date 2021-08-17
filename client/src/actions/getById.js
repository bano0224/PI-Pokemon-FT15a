import axios from 'axios';
import { POKEMON_ID } from '../constantes';

export const GET_BY_ID = "GET_BY_ID"

const getPokemonById = (id) => {
    return async (dispatch) => {
        try {
            var json = await axios.get(POKEMON_ID+id)
            return dispatch({
                type: GET_BY_ID,
                payload: json.data
            })
            /* await axios.get('http://localhost:3001/pokemons/'+id)
            .then(res => { dispatch
            ({type: GET_BY_ID, payload: res.data})}) */
        } catch(error) {
            console.log('Pokemon no encontrado')
        }
    }
}

export default getPokemonById;