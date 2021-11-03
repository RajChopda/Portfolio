import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './footer.module.css'
import whatsAppLogo from '../images/WhatsApp_Logo.svg';
import instagramLogo from '../images/Instagram_Logo.png';
import facebookLogo from '../images/Facebook_Logo.png';
import linkedInLogo from '../images/LinkedIn_Logo.png';

const Footer = () => {
    return (
        <Navbar bg="secondary" variant='dark' fixed='bottom'>
            <Container fluid className='justify-content-center'>
                <Nav className="pe-3">
                    <Navbar.Brand>Contact Me</Navbar.Brand>
                    <Navbar.Brand href="https://wa.me/+918141667785" target="_blank">
                        <img
                            src={whatsAppLogo}
                            className={styles.img}
                            alt="WhatsApp"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://instagram.com/raj._chopda" target="_blank">
                        <img
                            src={instagramLogo}
                            className={styles.img}
                            alt="Instagram"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.facebook.com/profile.php?id=100007749781632" target="_blank">
                        <img
                            src={facebookLogo}
                            className={styles.img}
                            alt="Facebook"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://www.linkedin.com/in/raj-patel-30b06a211" target="_blank">
                        <img
                            src={linkedInLogo}
                            className={styles.img}
                            alt="LinkedIn"
                        />
                    </Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;
