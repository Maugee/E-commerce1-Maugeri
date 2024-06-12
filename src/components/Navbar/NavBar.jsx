import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"


const NavBar = () => {
    return (

        <div className=' divColor'>
            <nav className='navBar'>
                <img className='img-til' src="https://live.pystatic.com/webassets/AppscoreWeb/global-page/0.5.6/_next/static/media/peya.bf6a4964.svg" alt="" />
                <ul>
                    <button><li>Pizzas</li></button>
                    <button><li>Lomos</li></button>
                    <button><li>Hamburguesas</li></button>
                    <button><li>Empanadas</li></button>
                </ul>

                <CartWidget />
            </nav>
        </div>
        
    )
}

export default NavBar