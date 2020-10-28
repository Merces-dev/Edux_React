import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo-branco.png';
import '../header/index.css';

const Header = () => {
  return(
    <div>
    <Navbar collapseOnSelect  expand="lg" bg="success" variant="dark">
    <Navbar.Brand href="#home"><img src={logo} className="nav-logo" alt="Edux"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#" >Sobre Nós</Nav.Link>
      </Nav>
      </Navbar.Collapse>
</Navbar>
    
   </div>
  )
}

export default Header;