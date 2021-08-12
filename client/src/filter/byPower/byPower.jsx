import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByPower } from '../../actions';


const FilterByPower = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch();

    const handleOrderByPower = (e) => {
        e.preventDefault();
        dispatch(filterByPower(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <label>Ordenar Pokemons por poder</label>
            <select onChange={e => {handleOrderByPower(e)}}>
                <option value='max'>Mayor Ataque</option>
                <option value='min'>Menor Ataque</option>
            </select>
        </div>
    )
}

export default FilterByPower;