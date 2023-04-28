import React from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import compact from '../../Components/Assets/Imagenes/compact.webp'
import latas from '../../Components/Assets/Imagenes/latas.webp'
import pen from '../../Components/Assets/Imagenes/pen.webp'
import mj1 from '../../Components/Assets/Imagenes/mj1.jpg'
import { Link } from "react-router-dom";

export default function HomePage  () {

      return (
        <div className='backgroundhome'> 
          <h1>Moon Store</h1>
            <p>
                Aca podes encontrar los mejores productos sobre Sailor Moon
            </p>
             <div className="grid-card">    
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={compact} />
      <Card.Body>
        <Card.Title>Crisis Moon Compact</Card.Title>
        <Card.Text>
        Crisis Moon Compact. Broche tipo polvera de Sailor Moon.
        </Card.Text>
        <button ><Link className="link"  to={"/item/ayurj3PmLItHIiztPFWk"}>DETALLES</Link></button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={latas} />
      <Card.Body>
        <Card.Title>Lata Sailor Moon</Card.Title>
        <Card.Text>
          Bebida gasificada sabor Pomelo de Sailor Moon.
        </Card.Text>
        <button><Link className="link" to={"/item/IY1YyXW2NTvtEjUigAKh"}>DETALLES</Link></button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pen} />
      <Card.Body>
        <Card.Title>Broch and Transformation Pen</Card.Title>
        <Card.Text>
        Broche y boligrafo de Transformacion de Sailor Moon.
        </Card.Text>
        <button><Link className="link" to={"/item/guHynU8nA0y4QDLZ2g6K"}>DETALLES</Link></button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mj1} />
      <Card.Body>
        <Card.Title>Sailor Moon Statue</Card.Title>
        <Card.Text>
         Sailor Moon Eternal statue of Sailor Moon in FiguartsZERO collection.
        </Card.Text>
        <button><Link className="link" to={"/item/xsmXfVd7823SWwg4EZhB"}>DETALLES</Link></button>
      </Card.Body>
    </Card>
 </div>

    
    </div >
    )
}