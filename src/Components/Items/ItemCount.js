
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ItemCount({ ini, max, stock, onAdd}) {
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);
    

    const [count, setCount] = useState(ini);
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

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setCount(1);
        setVendido(true);
        onAdd(quantity);
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])


    return (
        <div>
            <button onClick={restar}>-</button>
            {count}
            <button onClick={sumar}>+</button>
            <br />
            {vendido ? <button><Link className="link" to={"/Cart"}>Terminar Mi Compra</Link></button> : <button onClick={() => {addToCart(count)}}>Agregar al Carrito</button>}
            <br/>


        </div>
    );
}

