import React from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import compact from '../../Components/Assets/Imagenes/compact.webp'
import latas from '../../Components/Assets/Imagenes/latas.webp'
import pen from '../../Components/Assets/Imagenes/pen.webp'
import mj1 from '../../Components/Assets/Imagenes/mj1.jpg'


export default function HomePage() {
    
    return (
        <div> 
          <h2>Moon Store</h2>
            <p>
                Aca podes encontrar los mejores productos sobre Sailor Moon
            </p>
             <div class="grid-card">    
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={compact} />
      <Card.Body>
        <Card.Title>Compact</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">AGREGAR AL CARRITO</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={latas} />
      <Card.Body>
        <Card.Title>Lata Sailor Moon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">AGREGAR AL CARRITO</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pen} />
      <Card.Body>
        <Card.Title>Transformation Pen</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">AGREGAR AL CARRITO</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mj1} />
      <Card.Body>
        <Card.Title>Sailor Moon Statue</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">AGREGAR AL CARRITO</Button>
      </Card.Body>
    </Card>
 </div>

    
    </div >
    )
}