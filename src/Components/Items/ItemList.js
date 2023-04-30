import React from "react";
import Item from "./Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function ItemList({ Items }) {
    return (
        <Container>
             <Row>
  
        <div style={{ border: "2px solid salmon", margin: "10px",  }}>
            {!Items.length && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            {Items.map((item) => (
                <Item producto={item} />
            ))}
        </div>

             </Row>
        </Container>
    );
}