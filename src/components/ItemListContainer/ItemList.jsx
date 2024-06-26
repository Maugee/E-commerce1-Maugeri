import React from 'react'
import Item from './item'

const ItemList = ({productos}) => {
    return (
    <div className="comida">
    {
        productos.map((producto)=>(
            <Item key={producto.id} producto = {producto} />
        ))
    }
    </div>
)
}

export default ItemList