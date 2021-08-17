import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/searchBar';
import style from './navBar.module.css'


const NavBar = () => {

    return(
        <div>
            <h1>POKEMON</h1>
                <Link to='/pokemons'>
                    <button className={style.create}>
                        Crear Pokemon
                    </button>
                    </Link>
                <SearchBar/>
        </div>
    )
}

export default NavBar;