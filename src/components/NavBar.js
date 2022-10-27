import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogoOrg from './Aicon'
import './components.css'
function Basicexample() {
  return (
    <Nav className="navbar">
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"> <img 
              src={LogoOrg}
              width="30"
              height="30"
              className="logo-size logoOrg"
              alt="DPhi"
            /></Navbar.Brand>
        
      </Container>
    </Navbar>
    </Nav>
  );
}

export default Basicexample;