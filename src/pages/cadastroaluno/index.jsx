import React, { useEffect, useState }  from 'react';
import { Container, Form, Button, Dropdown } from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LogoColorida from '../../assets/img/logo_colorida.png';
import './index.css';


const CadastrarAluno = () => {

    return (
        <div >
            <Header />
            <br />
            <Container className='alert-success d-flex align-items-center flex-column border-bottom-0 rounded size-container-login' >
                <div  >
                    <img className='imglogin' src={LogoColorida} alt="Logo Edux" />
                </div>
                <h4>Cadastro Aluno</h4>
                <Form className='d-flex flex-column align-items-center size-container-login '>
                    <Form.Group controlId="formBasicEmail" className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Name :</p> </Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="Insira seu nome completo" required />
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword' className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Email :</p></Form.Label>
                        <Form.Control className='w-75' type='email' placeholder='Insira seu email'></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword' className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Senha :</p></Form.Label>
                        <Form.Control className='w-75' type='password' placeholder='Insira sua Senha'></Form.Control>
                    </Form.Group>

                        <a href='/login' style={{ marginTop: '40px' }}>Já tenho conta!</a>
                        <a href='/cadastrarprofessor' style={{ marginTop: '20px' }}>Cadastro de Professor</a>

                        <Button variant="primary" type="submit" className='mt-30'>
                            Enviar
                        </Button>



                </Form>
            </Container>
                <Footer />
        </div>

    )
};

export default CadastrarAluno;