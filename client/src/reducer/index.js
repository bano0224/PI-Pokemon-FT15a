import {POST_POKEMON, FILTERED_BY_TYPES, FILTERED_BY_ORIGIN,
FILTERED_BY_NAME, FILTERED_BY_POWER, GET_BY_NAME} from '../actions/index';
import { GET_BY_ID } from '../actions/getById'
import { GET_POKEMON } from '../actions/getPokemons'
import { GET_TYPES } from '../actions/getTypes'


const initialState = {
    pokemons: [], //filter, reducer 
    allPokemons: [],
    types: [],
    pokemonDetail: [],
    /* pokemonsDb: [],
    pokemonsApi: [] */
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
            
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            }

        case POST_POKEMON:
            return {
                ...state,
            }

        case FILTERED_BY_TYPES:
            const allPokemons = state.allPokemons
            const mapeo = allPokemons.map(p => {
                return {...p, types: p.types.map(e => e.name)}
            })
            const typeFiltered = action.payload === 'all' ? allPokemons : mapeo.filter(e => {
                return e.types.includes(action.payload)
            })
            return {
                ...state,
                pokemons: typeFiltered
            }

        case FILTERED_BY_ORIGIN:
            const allPokemon = state.allPokemons
            const filterCreate = action.payload === 'created' ? allPokemon.filter(e => e.createInDb) : allPokemon.filter(e => !e.createInDb)
            console.log(filterCreate)
            return{
                ...state,
                pokemons: action.payload === 'all' ? allPokemon : filterCreate
            }

        case FILTERED_BY_NAME:
            if (action.payload === "asc") 
                return { ...state, pokemons: [...state.pokemons].sort((name1, name2) => name1.name > name2.name ? 1 : -1) }
                return  { ...state, pokemons: [...state.pokemons].sort((name1, name2) => name1.name > name2.name ? -1 : 1) } 
            /* const orderPokemon = state.allPokemons
            const orderName = action.payload === 'asc' ?
            orderPokemon.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0;
            }) : 
            orderPokemon.sort(function (a, b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0;
            })
            console.log(orderName)
            return {
                ...state,
                pokemons: orderName
            } */

        case FILTERED_BY_POWER:
            const orderMaxPower = state.allPokemons
            const orderByPower = action.payload === 'max' ?
            orderMaxPower.sort(function(a, b) {
                if(a.attack > b.attack) {
                    return -1
                }
                if(b.attack > a.attack) {
                    return 1
                }
                return 0
            }) :
            orderMaxPower.sort(function(a, b) {
                if(a.attack > b.attack) {
                    return 1
                }
                if(b.attack > a.attack) {
                    return -1
                }
                return 0;
            })
            return {
                ...state,
                pokemons: orderByPower
            }

        case GET_BY_ID:
            console.log('REDUCER',action.payload)
            return {
                ...state,
                pokemonDetail: action.payload
            }
            
        
        default:
            return state;
    }
};

export default rootReducer;