import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
//import { productosM } from "./Data";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



export default function ItemListContainer({ Bienvenidos }) {
    const { idcategory } = useParams();

    const [Items, setProductos] = useState([]);

   
  useEffect(() => {
    const db = getFirestore();
    let Productos;
    if (idcategory) {
      Productos = query(collection(db, 'Productos'), where('category', '==', idcategory));
    } else {
      Productos = collection(db, 'Productos');
    }

    getDocs(Productos).then((res) => {
      console.log(res.docs);

      const arrayNorm = res.docs.map((element) => {
        return { id: element.id, name: element.data().name, category: element.data().category, precio: element.data().precio, stock: element.data().stock, pictureUrl: element.data().pictureUrl, };
      });

   
      console.log(arrayNorm);
      setProductos(arrayNorm);

    });
  }, [idcategory]);

    return (
        <div style={{ border: "2px solid pink", margin: "10px", }}>
            <ItemList Items={Items} />
        </div>
    );
}