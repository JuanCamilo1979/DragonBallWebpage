import React from 'react'
import './NotFound.css'
import dragonBall from '../../img/klipartz.com(1).png'

const NotFound = () => {
  return (
    <div className='headerNotFound'>

      <img src={dragonBall} className="himageNotFound" />

      <div className="intro-textNotFound">
        <h1>Error 404</h1>
        <p>Página no encontrada</p>
        <p>Elige entre el menú <strong>Hombres</strong>, <strong>Mujeres</strong> o <strong>Todos los personajes</strong> y sumérgete en el mundo de Dragon Ball</p>
      </div>

    </div>
  )
}

export default NotFound