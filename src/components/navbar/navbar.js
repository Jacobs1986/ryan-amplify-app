import React from "react";

//Styling
import "./navbar.css";

// Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
    return (
        <div>
            <Container id="navbarContainer">
                <Navbar expand="md">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" className="navLink">Home</Nav.Link>
                                <Nav.Link href="/about" className="navLink">About Me and Mindfulness</Nav.Link>
                                <Nav.Link href="/contact" className="navLink">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            {/* Header */}
            <Container id='headerContainer'>
                <h1 className="centerText" id="siteHeader">
                    Mindful Nature with Ryan
                </h1>
                <p className="centerText" id="siteDescription">
                    Connecting with nature through breath and movement
                </p>
            </Container>
        </div>
    );
};