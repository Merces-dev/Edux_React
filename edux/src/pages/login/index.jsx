import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LogoColorida from '../../assets/img/logo_colorida.png';
import jwt_decode from 'jwt-decode';
import { url } from '../../utils/constants';


import './index.css'
import { useHistory } from 'react-router-dom';




const Login = () => {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const logar = (event) => {
        event.preventDefault();
        fetch(url + '/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                senha: senha
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                alert('Dados Inválidos, tente novamente')
            })
            .then(data => {
                localStorage.setItem('token-edux', data.token);
                let user = jwt_decode(data.token); 
                if (user.role === 'Admin')
                    history.push('/admin/dashboard');
                else
                    history.push('/perfil');
            })
            .catch(err => console.error(err));
    };
    return (
        <div >
            <Header />
            <br />
            <Container className='alert-success d-flex align-items-center flex-column border-bottom-0 rounded size-container-login' >
                <div  >
                    <img className='imglogin' src={LogoColorida} alt="Logo Edux" />
                </div>
                <Form onSubmit={event => logar(event)} className='d-flex flex-column align-items-center size-container-login '>
                    <Form.Group controlId="formBasicEmail" className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Email :</p> </Form.Label>
                        <Form.Control className='w-75' type="email" placeholder="Insira seu email cadastrado" onChange={ event => setEmail(event.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword' className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Senha :</p></Form.Label>
                        <Form.Control className='w-75' type='password' onChange={ event => setSenha(event.target.value)} placeholder='Insira sua Senha'></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-30'>
                        Enviar
                        </Button>
                    <a href='/cadastrar' style={{ marginTop: '40px' }}>Esqueci minha senha!</a>
                    <a href='/cadastrar' style={{ marginTop: '10px' }}>Não tenho conta!</a>

                </Form>
            </Container>
            <Footer />
        </div>

    )
};

export default Login;