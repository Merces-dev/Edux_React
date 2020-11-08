import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { url } from '../../utils/constants';
import Header from '../../components/header';
import Footer from '../../components/footer';
import jwt_decode from "jwt-decode";
import LogoColorida from '../../assets/img/logo_colorida.png';
import { useHistory } from "react-router-dom";
import '../cadastroaluno/index.css';


const CadastrarAluno = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [idPerfil, setIdPerfil] = useState(0);
    const [perfil, setPerfil] = useState([])

    const history = useHistory();

    useEffect(() => {
        listarPerfil()
    }, []);

    const listarPerfil = () => {
        fetch(`${url}/perfil`)
            .then(response => response.json())
            .then(dados => {
                setPerfil(dados.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const salvar = (event) => {
        event.preventDefault();

        fetch(`${url}/usuario`, {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
                idPerfil: idPerfil,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.json());

                    alert('Usuario cadastrado com sucesso! Por favor efetue o login');

                    history.push('/login')
                }
            })
    }

    

    const limparCampos = () => {
        setIdPerfil(0);
        setNome('');
        setSenha('');
        setEmail('');
    }

    return (
        <div >
            <Header />
            <br />
            <Container className='alert-success d-flex align-items-center flex-column border-bottom-0 rounded size-container-login' >

                <div>
                    <img className='imglogin' src={LogoColorida} alt="Logo Edux" />
                </div>

                <h4>Cadastro</h4>
                <small>Insira os dados abaixo</small>

                <Form className='d-flex flex-column align-items-center size-container-login' onSubmit={event => salvar(event)} >

                    <Form.Group controlId="formBasicName" className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25'><p>Nome :</p> </Form.Label>
                        <Form.Control className='w-75' type="text" placeholder="Insira seu nome completo" value={nome} onChange={event => setNome(event.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId='formBasicEmail' className='d-flex flex-row w-75  mt-30'>
                        <Form.Label className='w-25' style={{ marginTop: '-25px' }} ><p>Email :</p></Form.Label>
                        <Form.Control className='w-75' style={{ marginTop: '-25px' }} type='email' placeholder="Insira seu email" value={email} onChange={event => setEmail(event.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword' className='d-flex flex-row w-75  mt-30'>
                        <Form.Label style={{ marginTop: '-25px' }} className='w-25'><p>Senha :</p></Form.Label>
                        <Form.Control style={{ marginTop: '-25px' }} className='w-75' type='password' placeholder='Insira sua Senha' value={senha} onChange={event => setSenha(event.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formPerfil" className='d-flex flex-row w-75  mt-30'>
                        <Form.Label style={{ marginTop: '-20px' }} className='w-25'><p>Usuário :</p> </Form.Label>
                        <Form.Control className='w-75' as="select" value={idPerfil} onChange={event => setIdPerfil(event.target.value)} style={{ marginTop: '-25px' }}>
                            <option value={0}>Selecione</option>
                            {
                                perfil.map((item, index) => {
                                    return (
                                        <option key={index} value={item.idPerfil}>{item.permissao}</option>
                                    )
                                })
                            }

                        </Form.Control>
                    </Form.Group>


                    <a className="botao" href='/login' style={{ marginTop: '-09px' }}>Já tenho conta!</a>

                    <Button variant="primary" type="submit" className='mt-30' >
                        Enviar
                    </Button>

                </Form>
            </Container>
            <Footer />
        </div>

    )
};

export default CadastrarAluno;