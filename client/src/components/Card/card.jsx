import React from 'react';
import style from './card.module.css'


const Card = ({name, image, type}) => {
    return(
        <div>
            <h2 className={style.title}>{name}</h2>
            <h5>{type}</h5>
            <img className={style.image} src={image} alt='Image not found'/>
        </div>
    )
};

export default Card;

