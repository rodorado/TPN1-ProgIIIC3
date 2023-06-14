import React from 'react';
import List from '../List/List.js';
import './Content.css'
const Content = (props) => {
  return (
    <div className='container'>
        <h1>Lista de Alumnos</h1>
        <List/>
        <p>{props.Parrafo}</p>
    </div>
  )
};

export default Content;