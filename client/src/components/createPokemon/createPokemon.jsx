import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon } from '../../actions';
import getTypes from '../../actions/getTypes'
import style from './createPokemon.module.css'

const CreatePokemon = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const getAllTypes = useSelector(state => state.types)
    console.log(getAllTypes)
    /* const [errors, setErrors] = useState({}); */

    useEffect(() => {
        dispatch(getTypes())
    },[]);
    
    const [input, setInput] = useState({
        name:'',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        sprite: '',
        types: []
    });

    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        /* setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
        console.log(e) */
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPokemon(input))
        alert('Pokemon creado con éxito')
        setInput({
            name:'',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            sprite: '',
            types: [],
        })
        console.log(setInput)
        history.push('/home')
    };

    const handleChangeType = (e) => {
        setInput({...input,
            types: [...input.types, e.target.value]
    })
    }

    const handleDelete = (el) => {
        setInput({
            ...input,
            types: input.types.filter(type => type !== el)
        })
    }
    
    return(
        <div className={style.pokeCreate}>
           <Link to='/home'><button>Volver a mundo Pokemon</button></Link>
            <h1>Bienvenido al laboratorio del profesor Oak</h1>
            <h2>En este PokeLab podrás crear tu propio Pokemon</h2>
            <h3>Cuidado con las habilidades, no queremos que todo se vaya de control</h3>
            <div className={style.trans}>

            </div>
            <div className={style.containerCreate}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label>Nombre:</label>
                <input required type='text' name='name' placeholder='Nombre' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Salud:</label>
                <input required type='number' min='0' max='200' name='hp' placeholder='Salud' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Ataque:</label>
                <input required type='number' min='0' max='200' name='attack' placeholder='Ataque' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Defensa:</label>
                <input required type='number' min='0' max='200' name='defense' placeholder='Defensa' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Velocidad:</label>
                <input required type='number' min='0' max='200' name='speed' placeholder='Velocidad' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Altura:</label>
                <input required type='number' min='0' max='200' name='height' placeholder='Altura' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Peso:</label>
                <input required type='number' min='0' max='200' name='weight' placeholder='Peso' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Imagen:</label>
                <input type='text' name='sprite' placeholder='Imagen' onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Tipo:</label>
                <select onChange={(e) => handleChangeType(e)} >
                {
                   getAllTypes?.map((type, i) => (
                        <option key={i} value={type.name}>{type.name}</option>
                   ))
                }
                </select>
                </div>
                <div>
                <button type='submit'>Crear personaje</button>
                </div>
            </form>
            </div>
            
            {
                input.types.map((el, i) => (
                    <div key={i}>
                        <p>{el}</p>
                        <button onClick={() => handleDelete(el)}>X</button>
                    </div>
                ))
            } 
        </div>
    )
}

export default CreatePokemon;