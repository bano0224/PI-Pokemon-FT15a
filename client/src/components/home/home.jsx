import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filteredByTypes, filteredByOrigin, filterByName, filterByPower } from '../../actions';
import getPokemons from '../../actions/getPokemons';
import getTypes from '../../actions/getTypes';
import { Link } from 'react-router-dom';
import PageComponent from '../paged/paged'
import style from './home.module.css'
import SearchBar from '../searchBar/searchBar';
import RenderPokemons from '../../render/renderPokemon';
import FilterByAz from '../../filter/ascDesc/ascDesc';
import FilterByPower from '../../filter/byPower/byPower';
import FilterByTypes  from '../../filter/byTypes/byTypes';
import FilterByOrigin from '../../filter/byOrigin/byOrigin';
import CleanFilter from '../../filter/cleanFilters/cleanFilters';
import NavBar from '../navBar/navBar';
import Loading from '../loading/loading';

const Home = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons) //en la constante //allPokemons me traigo todo el estado
    const cleanPokemons = useSelector(state => state.allPokemons)
    const allTypes = useSelector(state => state.types)
    
    const [currentPage, setCurrentPage] = useState(1); //mi página actual que va a arrancar en 1
    const [charactersPage, setCharactersPage] = useState(9); //mis personajes por página que siempre van a ser 9
    const [order, setOrder] = useState('');
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

    return(
    <>
        {
            (cleanPokemons.length === 0) ?
            
            <Loading className={style.loading}/>
            :
        <div className={style.bodyDiv}>
            <div className={style.header}>
                <h1 className={style.title}>Bienvenido a tu Pokedex!</h1>        
            </div>
            <div className={style.nav}>
                <label>Filtrar Pokemons</label>
                <div className={style.filter}>
                <FilterByAz setCurrentPage={setCurrentPage} setOrder={setOrder} />
                <FilterByPower setCurrentPage={setCurrentPage} setOrder={setOrder}/>
                <FilterByTypes allTypes={allTypes}/>
                <FilterByOrigin/>
                <CleanFilter/>
                </div>
                <div className={style.page}>
                <PageComponent className={style.pagination} charactersPage={charactersPage} allPokemons={allPokemons.length} page={page}/>
                </div>
            </div> 
            <div className={style.section}>
                <RenderPokemons currentCharacters={currentCharacters} allPokemons={allPokemons.length}/>
            </div>
            <div className={style.footer}>
            </div>    
        </div>
        }
    
    </>
    )
};




export default Home;