import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import { mouseEnter, mouseLeave } from '../helpers/cursorHover';

export default function StickyNav() {
    const [stickyClass, setStickyClass] = useState('hidden-sticky-nav');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        let viewportHeight = window.innerHeight;
        let startStick = viewportHeight * 0.9;
        // console.log(startStick);
        // window height changed for the demo
        windowHeight > startStick ? setStickyClass('sticky-nav') : setStickyClass('hidden-sticky-nav');
        }
    }

    return (
        <Container className={`${stickyClass}`}>
            <Navbar id="sticky-navbar" className="navbar navbar-dark">
                <Nav>
                <a 
                    className='navbar-link'
                    href={'#matt-nav'}
                    onMouseEnter={mouseEnter} 
                    onMouseLeave={mouseLeave}>
                    <span className={"sticky-navbar-span"}>// </span>about
                </a>
                <a 
                    className='navbar-link'
                    href='#expertise-main-container'
                    onMouseEnter={mouseEnter} 
                    onMouseLeave={mouseLeave}>
                    <span className="sticky-navbar-span">// </span>expertise
                </a>
                <a  
                    className='navbar-link'
                    href='#projects-container'
                    onMouseEnter={mouseEnter} 
                    onMouseLeave={mouseLeave}>
                    <span className="sticky-navbar-span">// </span>projects
                </a>
                <a 
                    className='navbar-link'
                    href='#exp-top-container'
                    onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span className="sticky-navbar-span">// </span>experience</a>
                </Nav>
            </Navbar>
        </Container>
    )
}