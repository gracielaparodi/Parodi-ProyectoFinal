import React from "react";
import "./ItemListContainer";

export default function ItemListContainer({ greeting }) {
    return <h1 style={{ backgroundColor: '#FFB5D6', textAlign: 'center', color: 'white' }}>{greeting}</h1>;
}