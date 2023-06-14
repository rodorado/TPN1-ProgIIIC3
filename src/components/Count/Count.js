import React, {useState} from 'react';
import './Count.css'

 function Count(){

    const [count, setCount] =useState(0);
    const handleClick =() =>{
        setCount(count + 1);
    }

    return (
        <div className='counter'>
            <p>clickeaste {count} veces</p>
            <button className='btn' onClick={handleClick}>Clickeame</button>
            <button className='btn' onMouseOver={handleClick} onMouseOut={handleClick} id='btn2'> Ratón dentro y fuera</button>
        </div>
    );
};
export default Count;