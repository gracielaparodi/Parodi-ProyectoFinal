import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import { productosM } from "./Data";
import ItemList from "./ItemList";


export default function ItemListContainer({ Bienvenidos }) {
    const { idcategory } = useParams();

    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        const productosPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosM);
            }, 2000);
        });

        productosPromise.then((res) => {
            if (idcategory) {
                setProductos(res.filter((item) => item.category === idcategory));
            } else {
                setProductos(res);
            }
        });
    }, [idcategory]);

    return (
        <div style={{ border: "2px solid pink", margin: "10px" }}>
            <ItemList Productos={Productos} />
        </div>
    );
}