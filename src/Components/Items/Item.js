
import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
            <div style={{ border: "2px solid #F9B8DB", margin: "10px" }}>
                <img src={item.pictureUrl} alt={item.name} />
                    <div>
                    <button><Link className="link" to={"/item/" + item.id}>DETALLES</Link></button>

            <br />
            <br />
                    </div>
            </div>
    )
}
export default Item;  

