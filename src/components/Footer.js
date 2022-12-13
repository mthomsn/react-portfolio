// import all necessary pkgs
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className='justify-content-center'>
      <Nav.Item as="li">
        <Nav.Link href="/home">
          <img src="https://img.icons8.com/ios/50/000000/github.png" alt="github" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">
          <img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="linkedin" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" href=''>
          <img src="https://img.icons8.com/ios/50/000000/gmail.png" alt="gmail" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;