import React from 'react'
import './Home.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Content from './components/Content/index.js';
import Aside from './components/Aside/Aside.js';
import Footer from './components/Footer/Footer.js';

const Home = () => {
  return (
    <div className='grid-layout'>
        <div className='grid-header'>
            <Header group='5' professor='Franco Perez'/>
        </div>
        <div className='grid-nav'>
            <Nav/>
        </div>
        <div className='grid-content'>
            <Content Parrafo = "Esta es la lista de alumnos de la comisión 3"/>
        </div>
        <div className='grid-aside'>
            <Aside/>
        </div>
        <div className='grid-footer'>
            <Footer texto="Trabajo Practico N°1 Programación III - Alumnos: Mateo Gonzalez, Lucas Vazquez y Dorado Rocio - Profesor Franco Villagra"/>
        </div>
    </div>
  )
}
export default Home;
