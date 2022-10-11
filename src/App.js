import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {BikePage} from "./pages/BikePage";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Home} from "./pages/Home";

function App() {
    return (<HashRouter>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand h>Bar Kar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="Bierfiets/">Home</Link></Nav.Link>
                            <NavDropdown title={<Link to="Bierfiets/attracties">Attracties</Link>} id="basic-nav-dropdown">
                                <NavDropdown.Item></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="Bierfiets/" element={<Home/>}/>
                <Route path="Bierfiets/attracties" element={<BikePage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
