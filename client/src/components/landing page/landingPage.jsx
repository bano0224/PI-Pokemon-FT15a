import React from 'react';
import { Link } from 'react-router-dom'
import style from './landingPage.module.css'

const landingPage = () => {
    return(
        <body className={style.body}>
            <div>
                <h1>Pokemón PI</h1>
            </div>
            <Link to = '/home'>
                <button>Ingresar</button>
            </Link>
        </body>
    )
    
}

export default landingPage;