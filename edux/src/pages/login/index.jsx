import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LogoColorida from '../../assets/img/logo_colorida.png'

import './index.css'
const Login = () => {
    return (
        <div >
            <Header />
            <br />
            <Container className='alert-success d-flex align-items-center flex-column border-bottom-0 rounded size-container-login' >
                <div  >
                    <img className='imglogin' src={LogoColorida} alt="Logo Edux" />
                </div>
                <Form className='d-flex flex-column align-items-center size-container-login '>
                    <Form.Group    controlId="formBasicEmail" className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Email :</p> </Form.Label>
                        <Form.Control className='w-75' type="email" placeholder="Insira seu email cadastrado" required />
                    </Form.Group>
                    <Form.Group   controlId='formBasicPassword' className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Senha :</p></Form.Label>
                        <Form.Control className='w-75' type='password' placeholder='Insira sua Senha'></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-30'>
                        Enviar
                        </Button>
                        
                    <a href='/cadastro' style={{ marginTop: '40px' }}>Não tenho conta!</a>

                </Form>
            </Container>
            <Footer />
        </div>

    )
};

export default Login;