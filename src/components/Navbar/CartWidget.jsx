import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className='div-img'>
        <FaShoppingCart className='img-car' size={50}/>
        <p className='p-Cart'>0</p>
    </div>
  )
}

export default CartWidget