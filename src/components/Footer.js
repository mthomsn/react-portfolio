// import all necessary pkgs
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { mouseEnter, mouseLeave } from '../helpers/cursorHover';

function Footer() {
return (
    <Navbar id='footer-parent-container' className='container-fluid'>
        <Nav defaultActiveKey="/home" as="ul" className='justify-content-center' id='footer-container' >
            <Nav.Item as="li" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <Nav.Link href="https://github.com/mthomsn" target='blank'>
                {/* <img src="https://img.icons8.com/ios/30/FFFFFF/github.png" alt="github" /> */}
                    <span className="footer-contact-names">Github</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <Nav.Link href="https://www.linkedin.com/in/matt-thomsen-2814b3254/" target='blank'>
                {/* <img src="https://img.icons8.com/ios/30/FFFFFF/linkedin.png" alt="linkedin" /> */}
                <span className="footer-contact-names">LinkedIn</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <Nav.Link href="mailto:matthewthomsen99@gmail.com">
                {/* <img src="https://img.icons8.com/ios/30/FFFFFF/gmail.png" alt="gmail" /> */}
                <span className="footer-contact-names">Email</span>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
);
}

export default Footer;