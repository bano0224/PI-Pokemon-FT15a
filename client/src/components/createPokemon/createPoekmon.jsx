import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, createPokemon } from '../../actions';

const CreateNewPokemon = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types)

    const [input, setInput] = useState({
        name:'',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })

    useEffect(() => {
        dispatch(getTypes())
    },[]);

    return(
        <div>
            <Link to='/home'><button>Volver a mundo Pokemon</button></Link>
            <h1>Bienvenido al laboratorio del profesor Oak</h1>
            <h2>En este PokeLab podrás crear tu propio Pokemon</h2>
            <h3>Cuidado con las habilidades, no queremos que todo se vaya de control</h3>
            <form>
                <label>Nombre:</label>
                <input type='text'/>
            </form>
        </div>
    )
}

export default CreateNewPokemon;