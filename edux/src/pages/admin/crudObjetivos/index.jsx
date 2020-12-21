import React, { useState, useEffect } from 'react';
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Titulo from '../../../components/titulo'
import { Table, Container, Button, Card, Form } from 'react-bootstrap';
import { url } from '../../../utils/constants';


const CrudObjetivos = () => {
    const [idObjetivo, setIdObjetivo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [objetivos, setObjetivos] = useState([]);
    const [categorias, setCategorias] = useState([]);



    useEffect(() => {
        listarObjetivos();
        listarCategorias();
    }, []);

    
    const listarCategorias = () => {

        fetch(url + '/categoria')
            .then(response => response.json())
            .then(dados => {
                setCategorias(dados.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const listarObjetivos = () => {

        fetch(url + '/objetivo')
            .then(response => response.json())
            .then(dados => {
                setObjetivos(dados.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }


    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/objetivo/' + event.target.value, {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            setIdObjetivo(dados.idObjetivo);
            setDescricao(dados.descricao);
            setIdCategoria(dados.idCategoria);
        })
        .catch(err => console.error(err));

    }

    
    const remover = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(url + '/objetivo/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('O objetivo foi removido!')
                listarObjetivos()
            })
            .catch(err => console.error(err));
    }

    const salvar = (event) => {
        event.preventDefault();

        let objetivo = {
            // idObjetivo : id,
            descricao : descricao,
            idCategoria : idCategoria,
        }


        let method = (idObjetivo === '' ? 'POST' : 'PUT');
        let urlRequest = (idObjetivo === '' ? url + '/objetivo' : url + '/objetivo/' + idObjetivo);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(objetivo),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(response => {
                alert('Objetivo salvo');
                limparCampos();
                listarObjetivos();
            })
            .catch(err => console.error(err))
    }

    const limparCampos = () => {
        setIdObjetivo('');
        setDescricao('');
        setIdCategoria('');
    }

    

    return(

        <div>
        <Header />
        <Titulo titulo="Objetivos" chamada="Gerencie seus Objetivos" />

        

        <Container>

        <Card>  
            <Card.Body>
                <Form onSubmit={event => salvar(event)}>
                    <Form.Group controlId="formBasicNome">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} placeholder="Descrição"></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formCategoria">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control as="select" value={idCategoria} onChange={event => setIdCategoria(event.target.value)}>
                                    <option value={0}>Selecione</option>
                                    {
                                        categorias.map((item, index) => {
                                            return (
                                                <option key={index} value={item.idCategoria}>{item.tipo}</option>
                                            )
                                        })
                                        
                                    }
                                </Form.Control>
                            </Form.Group>
                    <Button type="submit">salvar</Button>
                </Form>
            </Card.Body>
        </Card>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    objetivos.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.descricao}</td>
                                <td>{item.idCategoriaNavigation.tipo}</td>
                                <td>
                                            <Button type="button" variant="primary" value={item.idObjetivo} onClick={event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger"  value={item.idObjetivo} onClick={event => remover(event)}>Excluir</Button>
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

export default CrudObjetivos;