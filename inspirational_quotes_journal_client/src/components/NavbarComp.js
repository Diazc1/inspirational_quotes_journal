import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Nav className="me-auto">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Brand href="/InspirationalQuotes">My Quotes</Navbar.Brand>
                        <Navbar.Brand href="/about">About Me</Navbar.Brand>
                        <Navbar.Brand href="/LiveCodingComponent">Live Coding</Navbar.Brand>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComp;