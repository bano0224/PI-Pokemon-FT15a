import React from 'react';
import Card from '../components/Card/card';
import { Link } from 'react-router-dom';
import style from './renderPokemon.module.css';

const RenderPokemons = ({currentCharacters, allPokemons}) => {
console.log(currentCharacters)
    return(
        <div>
            {
                (allPokemons === 0) ? 
                (<div>
                    <img src='https://www.gratistodo.com/wp-content/uploads/2016/07/pokemon-wallpapers-22-800x582.jpg' className={style.imagen}/>
                </div>)
                :
                <div className={style.render}>
                {
                currentCharacters?.map(pokemon => (
                    <div key={pokemon.id}>
                        <Link to={'/home/' + pokemon.id}/>
                        <Card
                            name={pokemon.name}
                            id={pokemon.id}
                            image={pokemon.sprite}
                            type={pokemon.types.map(type => <h3 key={type.id}>{type.name}</h3>)}
                        />
                    </div>
                ))
                }
                </div>
            }
        </div>
    )
}

export default RenderPokemons;