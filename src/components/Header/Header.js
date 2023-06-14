import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <h1 className='h1'>Buenos dias profesor <strong>{props.professor} y somos el grupo {props.group}!</strong> </h1>
  )
};

export default Header;