import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "./ItemDetails";


export default function ItemDetailContainer({ greeting }) {
    const { iditem } = useParams();

    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        const db = getFirestore();
    
        let docSinNorm = doc(db, 'Productos', iditem);
    
        getDoc(docSinNorm).then((item) => {
          setProducto({ id: item.id, ...item.data() });
        });
      }, [iditem]);

    return (
        <div style={{ border: "2px solid pink", margin: "10px", display: "block" }}>
            <ItemDetail producto={producto} />
        </div>
    );
}