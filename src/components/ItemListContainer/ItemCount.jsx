import { useState } from 'react'



const ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState(0)

    const aumentar = () =>{
        if(cantidad < stock){
            setCantidad( cantidad + 1 )
        }
    }

    const reducir = () =>{
        if(cantidad > 0){
            setCantidad( cantidad - 1 )
        }
    }

    const agregarCarrito = ()=>{
        console.log("Su Pedido es de: " + cantidad)
    }

    return (
    <div className='cantidad'>
        <div className='botones'>
            <button onClick={reducir}>-</button>
            <p>{cantidad}</p>
            <button onClick={aumentar}>+</button>
        </div>
        <div className='agregar'>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    </div>
    )
}

export default ItemCount