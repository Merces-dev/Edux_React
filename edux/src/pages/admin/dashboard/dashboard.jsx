import React, { useState, useEffect } from 'react';
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Titulo from '../../../components/tituloDashboard'
import { Table, Container, Button, Card, Form } from 'react-bootstrap';
import { url } from '../../../utils/constants';


const Dashboard = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [pontuacao, setPontuacao] = useState('');
    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        listar();
    }, []);

    
    const listar = () => {
        fetch(url + '/usuario')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)

                limparCampos();
            })
            .catch(err => console.error(err));
        
    }


    const editar = (event) => {
        event.preventDefault();

        fetch(`${url}/usuario/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.idUsuario);
            setNome(dado.nome);
            setPontuacao(dado.pontuacao);
        })
    }

    
    const remover = (event) => {
        event.preventDefault();

        fetch(`${url}/usuario/${event.target.value}`, {
            method : 'DELETE'
        })
        .then(response => response.json())
        .then(dados => {
            alert('Usuario removido com sucesso!');

            listar();
        })
        .catch(err => console.error(err))
    }

    const enviar = (event) => {
        event.preventDefault();

        const usuario = {
            nome : nome,
            pontuacao : pontuacao
        }


        fetch(`${url}/usuario/${id}`, {
            method : 'PUT',
            body : JSON.stringify(usuario),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Usuario editado com sucesso!');

            listar();
        })

    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setPontuacao('');
    }

    

    return(

        <div>
        <Header />
        <Titulo titulo="Dashboard" chamada="Gerencie os alunos" />

        

        <Container>

        <Card>  
            <Card.Body>
                <Form onSubmit={event => enviar(event)}>
                    <Form.Group controlId="formBasicNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome"></Form.Control>
                        <Form.Label>Pontuação</Form.Label>
                        <Form.Control type="text" value={pontuacao} onChange={event => setPontuacao(event.target.value)} placeholder="Pontuação"></Form.Control>
                    </Form.Group>
                    <Button type="submit">Enviar</Button>
                </Form>
            </Card.Body>
        </Card>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Pontuação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.pontuacao}</td>
                                <td>
                                    <Button type="button" variant="primary" value={item.idUsuario} onClick={ event => editar(event)}>Editar</Button>
                                    <Button type="button" variant="danger" value={item.idUsuario} onClick={event => remover(event)} style={{ marginLeft : '15px' }} >Remover</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
            </Container>

        <Footer />
        </div>

    )

};

export default Dashboard;