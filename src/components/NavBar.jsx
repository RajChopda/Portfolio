import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar(props) {
    return (
        <Navbar bg="primary" variant='dark' expand='sm' sticky='top'>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav className="pe-3">
                        <Navbar.Brand>
                            <Nav.Link href="/AboutMe" className={props.aboutMe}>About Me</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Nav.Link href="/Skills" className={props.skills}>Skills</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Nav.Link href="/Projects" className={props.projects}>Projects</Nav.Link>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
