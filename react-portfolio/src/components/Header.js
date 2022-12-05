import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => handlePageChange('About')}>Matt Thomsen</Navbar.Brand>
        <Navbar id="basic-navbar-nav">
          <Nav className="justify">
            <Nav.Link onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : ''}>About Me</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'active' : ''}>Resume</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active' : ''}>Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;