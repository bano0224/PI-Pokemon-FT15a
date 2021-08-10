import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions';
import { Link } from 'react-router-dom';
import  Card  from '../Card/card';
import PageComponent from '../paged/paged'
import style from './home.module.css'



const Home = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons) //en la constante //allPokemons me traigo todo el estado
    const allTypes = useSelector(state => state.types)
    
    
    const [currentPage, setCurrentPage] = useState(1); //mi página actual que va a arrancar en 1
    const [charactersPage, setCharactersPage] = useState(9); //mis personajes por página que siempre van a ser 9
    const indexLastCharacter = currentPage * charactersPage;
    const indexFirstCharacter = indexLastCharacter - charactersPage;
    const currentCharacters = allPokemons.slice(indexFirstCharacter, indexLastCharacter) //me va a devolver un arreglo donde en la primer página va a tener los elementos de la posición 0 a la 5
    
    const page = (pageNumber) => { //me va a ayudar a realizar el renderizado
        setCurrentPage(pageNumber)
    } 
    
    useEffect(() => { //va a cumplir las veces del componentDidMount al momento de montarse el componente
        dispatch(getPokemons()) //con el useEffect reemplazo la lógica del mapDispatchToProps
        dispatch(getTypes())
    },[dispatch])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getPokemons)
    };

    return(
        <div className={style.divGeneral}>
            
            <div>
                <h1>POKEMON</h1>
                <Link to = '/pokemons'>Crear Pokemon</Link>
                <button onClick={e=>{handleSubmit(e)}}>Cargar personajes</button>
                <label>Filtrar Pokemons</label>
                <select>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select>
                    {
                    allTypes && allTypes.map(type => {
                        return(
                            <option value={`${type.name}`}>
                                {type.name}
                            </option>
                        )})
                    }
                </select>
                <select>
                    <option value='All'>Todos</option>
                    <option value='created'>Creados en el PokeLab</option>
                    <option value='api'>Naturales</option>
                </select>
            </div>
            <div className={style.page}>
                <PageComponent
                charactersPage={charactersPage} 
                allPokemons={allPokemons.length}
                page={page}>
                </PageComponent>
            </div>    
            <div className={style.div}>
                {
                    currentCharacters?.map(pokemon => {
                        return(
                            <>
                            <Link to={'/home/' + pokemon.id}>
                                <Card 
                                key={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprite}
                                type={pokemon.types.map(type => <p key={type.id}>{type.name}</p>)}/>
                            </Link>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
};




export default Home;