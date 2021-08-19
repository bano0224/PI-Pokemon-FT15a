import React from 'react';
import { Link } from 'react-router-dom'
import style from './landingPage.module.css'

const landingPage = () => {

    return(
        <div className={style.landingPage}>
           <div className={style.container}>
               <h1>Bienvenido a mundo Pokemon</h1>
                <Link to='/home' className={style.pokebola}>
		            <div class={style.pokebola2}></div>
	            </Link> 
           </div>
        </div>
    )
    
}

export default landingPage;