import React from "react";
import Item from "./Item";

export default function ItemList({ Productos }) {
    console.log('render de item list ');

    return (
        <div style={{ border: "2px solid salmon", margin: "10px" }}>
            {!Productos.length && <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            {Productos.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
}