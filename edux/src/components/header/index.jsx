import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const history = useHistory();
    const sair = (event) => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (

        <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
            <Navbar.Brand href="/">Edux</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="/">Home</Nav.Link>

                    <Nav.Link href="/">-</Nav.Link>
                    <Nav.Link href="/">=</Nav.Link>
                    <Nav.Link href="/">=</Nav.Link>
                    <Nav.Link href="/">=</Nav.Link>
                    <Nav.Link href="/">=</Nav.Link>


                    <NavDropdown /*title={jwt_decode(token).family_name}*/ id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil">Perfil </NavDropdown.Item >
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item >
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )

};

export default Header;