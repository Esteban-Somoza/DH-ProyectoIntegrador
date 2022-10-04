import React from 'react'
import "./Statistics.css"

export default function Statistics({ title, data }) {
  let info = data.data
  return (
    <div className='ultimoRegistro'>
      <h5>Cantidad de usuarios registrados: {data.totalAmout}</h5>
      <br />
      <h4>Último {title} registrado:</h4>
      <div className='ultimo'>
        <figure>
          <img src={info.imagen} alt="" />
        </figure>
        <h5>{info.nombre}</h5>
      </div>
    </div>
  )
}
