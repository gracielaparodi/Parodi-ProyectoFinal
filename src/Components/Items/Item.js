import React from "react";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';


const Item = ({ producto}) => {
    return (
        <Col xs={11} sm={11} md={6} lg={4} xl={4} xxl={4} style={{display: "inline-block"}}>
         <div style={{ border: "2px solid #F9B8DB", margin: "10px", padding: "10px", display: "inline-block"}}>
                <img src={producto.pictureUrl} alt={producto.name} height={"275px"} />
                <br/><br/>
                {producto.name}
                <br />
                USD {producto.precio}
                    <div>
                    <button><Link className="link" to={"/item/" + producto.id}>DETALLES</Link></button>

            <br />
            <br />
                    </div>
            </div>
            </Col>
    );
}
export default Item;  
