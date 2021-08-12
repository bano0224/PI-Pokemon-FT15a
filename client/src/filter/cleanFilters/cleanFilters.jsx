import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions';


const CleanFilter = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getPokemons())
    };

    return(
        <div>
            <button onClick={e=>{handleSubmit(e)}}>Limpiar filtros</button>
        </div>
    )
}

export default CleanFilter;