import React, { useContext } from "react";
import {CartContext} from "../Cart/CartContext";
import ShoppingCart from './Assets/Imagenes/shopping-cart.png';

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal( 
    
        <div>
            <a href="Cart"> <img src={ShoppingCart} alt="Cart" width={35} /></a> <span style={{color:"white"}}>7</span>
        </div>
        );
    };
    
    export default CartWidget;
    