import React from 'react'
import ShoppingCart from './Assets/Imagenes/shopping-cart.png';

const CartWidget = () => {
    return ( 
    
        <div>
            <a href="Cart"> <img src={ShoppingCart} alt="Cart" width={35} /></a> <span style={{color:"white"}}>7</span>
        </div>
        );
    };
    
    export default CartWidget;
    