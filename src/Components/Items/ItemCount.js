
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {productosM} from "../Items/Data"
import { CartContext } from "../Cart/CartContext";

export default function ItemCount({ ini, max, producto}) {
    const [itemStock, setItemStock] = useState(productosM);
    const [vendido, setVendido] = useState(false);
    const [count, setCount] = useState(ini);
    const {addItem} = useContext(CartContext);

    function restar() {
        if (count >= 2) {
            setCount(count - 1);
        }
    }

    function sumar() {
        if (count < max) {
            setCount(count + 1);
        }
    }

    const addToCart = () => {
        setItemStock(itemStock - productosM);
        setCount(1);
        setVendido(true);
        addItem(producto, count);
    }

    useEffect(() => {
        setItemStock(productosM);
    }, [])


    return (
        <div>
            <button onClick={restar}>-</button>
            {count}
            <button onClick={sumar}>+</button>
            <br />
            {vendido ? <button><Link className="link" to={"/category/Cart"}>Terminar Mi Compra</Link></button> : <button onClick={() => {addToCart(count)}}>Agregar al Carrito</button>}
            <br/>


        </div>
    );
}

