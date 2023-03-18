import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import CartWidget from "./CartWidget";
import logo from '../Components/Assets/Imagenes/logo.png';


const NavBar1 = ({ conBoton, color, funcionLogin }) => {
 

    return (
        <div style={{ backgroundColor: color }}>

            <img src={logo} className="App-logo" alt="logo" width={250} />



            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="Inicio">Inicio</Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="Historia">Historia</Nav.Link>
                        <Nav.Link href="Anime">Anime</Nav.Link>
                        <Nav.Link href="Manga">Manga</Nav.Link>
                        <Nav.Link href="Productos">Productos</Nav.Link>

                        <CartWidget />
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Container>
            </Navbar>



        </div >

);
};

export default NavBar1;