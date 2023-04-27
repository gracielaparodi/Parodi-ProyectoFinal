import React from "react";
import Item from "./Item";

export default function ItemList({ Items }) {

    return (
        <div style={{ border: "2px solid salmon", margin: "10px" }}>
            {!Items.length && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            {Items.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
}