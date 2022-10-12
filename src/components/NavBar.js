
import {Link} from "react-router-dom";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function NavBar() {
    return( <Navbar bg="dark" variant="dark" expand="md">
        <Container>
            <Navbar.Brand>Bar Kar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">>
                <Nav>
                    <NavLinkComp className="nav-link" title="Home" to="/"/>
                    <NavDropdown title="Attracties" id="basic-nav-dropdown" className="dropdowns">
                        <NavLinkComp title="Al onze attracties" to="attractions/"/>
                        <NavLinkComp title="Bier fietsen" to="attractions/bikes/"/>
                        <NavLinkComp title="Springkastelen" to="attractions/houses/"/>
                    </NavDropdown>
                    <NavLinkComp title="Contact" className="nav-link" to="contact/"/>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

function NavLinkComp(props){
    const {title, to, className} = props
    return(
        <Link to={to} className={className? className:"dropdown-item"}>{title}</Link>
    )
}

