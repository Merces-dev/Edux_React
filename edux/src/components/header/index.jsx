
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo-branco.png';
import '../header/index.css';

const Header = () => {
  const history = useHistory();
  const sair = (event) => {
    event.preventDefault();
    localStorage.removeItem('token-edux');
    history.push('/');
  }

  const renderHeader = () => {
    const token = localStorage.getItem('token-edux')

    if (token === null) {
      return (
        <Nav>
          <Nav.Link className='hover' href="/login">Login</Nav.Link>
          <Nav.Link className='hover' href="/cadastro">Cadastrar</Nav.Link>
        </Nav>
      );
    }
    else if (jwt_decode(token).role === 'Admin') {
      return (
        <Nav >
          <Nav.Link className='hover' href="/admin/dashboard">Dashboard</Nav.Link>
          <Nav.Link className='hover' href="/admin/cruddicas">Crud Dicas</Nav.Link>
          <Nav.Link className='hover' href="/admin/crudcurso">Crud Cursos</Nav.Link>
          <NavDropdown className='hover' title={jwt_decode(token).nameid}>
              <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
          </NavDropdown>
        </Nav>
      )
    }
    else {
      return (
        <Nav>
          <Nav.Link className='hover' href="/dicas">Dicas</Nav.Link>
          <Nav.Link className='hover' href="/cursos">Cursos</Nav.Link>
          <Nav.Link className='hover' href="/timeline">Timeline</Nav.Link>
          <Nav.Link className='hover' href="/objetivos">Objetivos</Nav.Link>


          <NavDropdown className='hover' title={jwt_decode(token).nameid} >
            <NavDropdown.Item href="/perfil">Perfil do Aluno </NavDropdown.Item >
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={event => sair(event)}>Sair da conta</NavDropdown.Item >
          </NavDropdown>

        </Nav>
      )
    }


  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Navbar.Brand href="/"><img src={logo} className="nav-logo" alt="Edux" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='hover' href="/">Home</Nav.Link>
          </Nav>
          {renderHeader()}

        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Header;