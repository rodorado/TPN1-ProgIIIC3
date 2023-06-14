import React from 'react';
import './Footer.css'

const Footer = (props) => {
  return (
    <h6 className='footer'>{props.texto}</h6>
  )
};

export default Footer;