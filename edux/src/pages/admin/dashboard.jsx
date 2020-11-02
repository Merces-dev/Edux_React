import React, { useState, useEffect } from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Titulo from '../../components/titulo'
import { Table, Container, Button, Card, Form } from 'react-bootstrap';
import { url } from '../../utils/constants';


const Dashboard = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        listar();
    }, []);

    
    const listar = () => {
        fetch(url + '/usuario')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)
                console.log(data)
            })
            .catch(err => console.error(err));
        
    }


    const editar = (event) => {
        event.preventDefault();

        console.log('editar ' + event.target.value);
    }

    

    return(

        <div>
        <Header />
        <Titulo titulo="Dashboard" chamada="Gerencie os alunos" />

        

        <Container>

        <Card>  
            <Card.Body>
                <Form onSubmit={event => salvar(event)}>
                    <Form.Group controlId="formBasicNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome"></Form.Control>
                    </Form.Group>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Card.Body>
        </Card>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.nome}</td>
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