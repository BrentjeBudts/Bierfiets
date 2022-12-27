
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestoreDB} from "../services/firestore";
import {collection, getDocs, where, query} from "firebase/firestore";
import {logout} from "../services/firestore";
import Button from "react-bootstrap/Button";


export function NavBar() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const fetchUserName = async () => {
        try {
            const q = query(collection(firestoreDB, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            localStorage.setItem("name", data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(()=>{
        if(user){
            fetchUserName().then();
        }
    })

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
                    {!user?<NavLinkComp title="Login" className="nav-link" to="login/"/>:
                        <Button className="nav-link btnNav" onClick={logout}>Logout</Button>}
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

