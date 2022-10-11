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
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand>Bar Kar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link className="nav-link" to="/">Home</Link>
                            <NavDropdown title="Attracties" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="bikes/">Bier fietsen</Link>
                                <Link className="dropdown-item" to="bouncyhouse/">Springkastelen</Link>
                            </NavDropdown>
                            <Link className="nav-link" to="/">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="bikes" element={<BikePage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
