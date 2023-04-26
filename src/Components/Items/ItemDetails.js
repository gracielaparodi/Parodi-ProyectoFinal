import React  from "react";
import ItemCount from "./ItemCount";




export default function ItemDetail({ producto }) {

    function addItem(x) {
    }
    return (
        <div style={{ border: "2px solid pink", margin: "10px" }}>
            {producto.id ? (
                <>
                    <img src={producto.pictureUrl} alt={producto.name} />
                    <br />
                    {producto.name}
                    <br />
                    PRECIO: {producto.precio}
                    <br />
                    STOCK: {producto.stock}
                    <br />
                    <ItemCount ini={1} max={producto.stock} addItem={addItem} />
                </>

                
            ) : (
                <><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></>
            )}


        </div>
    );

            }