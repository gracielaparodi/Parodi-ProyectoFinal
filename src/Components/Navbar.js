import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ShoppingCart from './Assets/Imagenes/shopping-cart.png';
import logo from '../Components/Assets/Imagenes/logo.png';
import { Link } from "react-router-dom";





const NavBar = ({color}) => {
 

    return (
        <div style={{ backgroundColor: color }}>


<Navbar expand="xxl">
                <Container  className="justify-content-center">
               
             
                    <Navbar.Brand as={Link} to="/"> <img src={logo} className="App-logo" alt="logo" width={100} /></Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/category/Anime">Anime</Nav.Link>
                        <Nav.Link as={Link} to="/category/Manga">Manga</Nav.Link>
                        <Nav.Link as={Link} to="/category/Merch">Merch</Nav.Link>

                    </Nav>
                    </Container>
                    <Form className="d-flex">
                    <Nav.Link as={Link} to="/category/Carrito"> <img class="carrito" src={ShoppingCart} width={40}  alt="Carrito" /></Nav.Link>
                         <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                            style={{ color: "white" }}
                             /> 
                        <Button variant="outline-light" >Buscar</Button>
                    </Form>

             
            </Navbar>



        </div >
   
);
};

export default NavBar;