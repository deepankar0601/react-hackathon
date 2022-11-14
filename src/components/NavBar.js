import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo192 from '../assets/logo/logo192.png'
import './components.css'
function Basicexample() {
  return (
    <Nav className="navbar">
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"> <img 
              src={logo192}
              width="30"
              height="30"
              className="logo-size logoOrg"
              alt="logo"
            /></Navbar.Brand>
        
      </Container>
    </Navbar>
    </Nav>
  );
}

export default Basicexample;