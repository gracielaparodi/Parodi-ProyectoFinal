import React, {useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../Cart/CartContext";


export default function ItemDetail({ producto }) {
    const { addItem } = useContext(CartContext);
    // eslint-disable-next-line no-unused-vars
    function onAdd(quantity) {
      addItem(producto, quantity);
    }
   
    return (
        <div style={{ border: "2px solid pink", margin: "10px", padding:"10px", display: "inline-block"}}>
            {producto.id ? (
                <>
                    <img src={producto.pictureUrl}  alt={producto.name} height={"275px"} />
                    <br /> <br />
                    {producto.name}
                    <br />
                    PRECIO: USD {producto.precio}
                    <br />
                    STOCK: {producto.stock}
                    <br />
                    DESCRIPCION: {producto.description}
                    <br />
                    <ItemCount ini={1} max={producto.stock} producto={producto} />
                </>

                
            ) : (
                <><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></>
            )}


        </div>
    );

            }