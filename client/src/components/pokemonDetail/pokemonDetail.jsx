import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getPokemonById from '../../actions/getById';
import { SPRITE_CREATE } from '../../constantes';
import Loading from '../loading/loading';
import style from './pokemonDetail.module.css'

const PokemonDetail = (props) => {
    

    const dispatch = useDispatch();
    /* const {id} = useParams(); */
    console.log(props)
    
    
    
    useEffect(() => {
        dispatch(getPokemonById(props.match.params.id))
    },[])

    const pokeDetail = useSelector(state => state.pokemonDetail)
    console.log('POKEDETAIL',pokeDetail)
    return(
        <div>
            {
               pokeDetail.length === 0 ?
               <Loading/>
               :
               <div key={pokeDetail.id}>
                   <img src={pokeDetail[0].sprite ? pokeDetail[0].sprite : SPRITE_CREATE}/>
                   <h1>{pokeDetail[0].name}</h1>
                   <h4>TIPO: {pokeDetail[0].types.map(type => type.name + (' '))}</h4>
                   <div>
                       <h5>HP: {pokeDetail[0].hp}</h5>
                       <h5>ATTACK: {pokeDetail[0].attack}</h5>
                       <h5>DEFENSE: {pokeDetail[0].defense}</h5>
                       <h5>SPEED: {pokeDetail[0].speed}</h5>
                    <div>
                        <h5>HEIGHT: {pokeDetail[0].height}</h5>
                        <h5>WEIGHT: {pokeDetail[0].weight}</h5>
                    </div>
                   </div>
                   <Link to='/home'>
                        <button class={style.noSelect}>Volver</button>
                    </Link>
                        {/* <h5>ID: {pokeDetail.id}</h5> */}
               </div> 
            }
            
        </div>
)
}


export default PokemonDetail;