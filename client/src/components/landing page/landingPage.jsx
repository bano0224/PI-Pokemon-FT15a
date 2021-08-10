import React from 'react';
import { Link } from 'react-router-dom'
import style from './landingPage.module.css'

const landingPage = () => {
    return(
        <>
        <div className={style.div}>
            <h1>Atraparlos ya! Pokemón!</h1>
        </div>
        <Link to = '/home'>
            <button>Ingresar</button>
        </Link>
        </>
    )
    
}

export default landingPage;