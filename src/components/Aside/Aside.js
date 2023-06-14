import React from 'react'
import Card from '../Card/index.js'
import Imagen1 from '../../assets/1.jpg'
import Imagen2 from '../../assets/2.jpg'
import Imagen3 from '../../assets/3.jpg'
const Aside = () => {
  return (
    <div>
      <Card picture={Imagen1} title="Mateo González" description="dev"/>
      <Card picture={Imagen2} title="Rocío Dorado" description="dev"/>
      <Card picture={Imagen3} title="Lucas Vazquez" description='dev'/>
    </div>
  )
}

export default Aside