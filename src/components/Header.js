import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { mouseEnter, mouseLeave } from '../helpers/cursorHover';

function Header() {
return (
    <Navbar expand="lg">
    <Container>
        <Navbar.Brand id="matt-nav" 
        onMouseEnter={mouseEnter} 
        onMouseLeave={mouseLeave}>
        Matt_Thomsen
        </Navbar.Brand>

        <Navbar id="header-navbar" className="navbar navbar-dark">
        <Nav className="justify">
            <a 
                className='navbar-link'
                href={'#matt-nav'}
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}>
                <span className="navbar-span">// </span>about
            </a>
            <a 
                className='navbar-link'
                href='#expertise-main-container'
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}>
                <span className="navbar-span">// </span>expertise
            </a>
            <a
                className='navbar-link'
                href='#projects-container'
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}>
                <span className="navbar-span">// </span>projects
            </a>
            <a 
                className='navbar-link'
                href='#exp-top-container'
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}>
                <span className="navbar-span">// </span>experience
            </a>
        </Nav>
        </Navbar>
    </Container>
    </Navbar>
);
}

export default Header;