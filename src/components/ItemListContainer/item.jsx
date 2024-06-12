import React from 'react'
import ItemCount from './ItemCount'


const item = ({producto}) => {
  return (
    <div className="productos">
            <img src={producto.imagen} width={300} height={220}/>
            <h3>{producto.nombre}</h3>
            <p>precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <ItemCount stock = { 7 }/>
        </div>
  )
}

export default item