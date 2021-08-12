import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredByOrigin } from '../../actions';


const FilterByOrigin = () => {
    const dispatch = useDispatch();

    const handleFilteredByOrigin = (e) => {
        dispatch(filteredByOrigin(e.target.value))
    }

    return(
        <div>
            <label>Filtrar por origen</label>
            <select onChange={e => handleFilteredByOrigin(e)}>
                <option value='all'>Todos</option>
                <option value='created'>Creados en el PokeLab</option>
                <option value='api'>Naturales</option>
            </select>
        </div>
    )
}

export default FilterByOrigin;