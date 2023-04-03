import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productosM } from "./Data";
import ItemDetail from "./ItemDetails";

export default function ItemDetailContainer({ greeting }) {
    const { iditem } = useParams();

    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        const productoPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosM.find((item) => item.id === parseInt(iditem)));
            }, 2000);
        });

        productoPromise.then((res) => {
            console.log(res)
            setProducto(res);
        });
    }, [iditem]);

    return (
        <div style={{ border: "2px solid black", margin: "10px" }}>
            <ItemDetail producto={producto} />
        </div>
    );
}