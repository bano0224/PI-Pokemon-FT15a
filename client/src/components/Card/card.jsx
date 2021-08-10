import React from 'react';
import style from './card.module.css'

const Card = ({name, image, type}) => {
    return(
        <div>
            <h3>{name}</h3>
            <h5>{type}</h5>
            <img src={image} alt='Image not found' width='200px' height='250px' />
        </div>
    )
};

export default Card;