import React from 'react';
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.picture} alt=""/>
        <h4>{props.title}</h4>
        <p><small>{props.description}</small></p>
    </div>
  )
};

export default Card;