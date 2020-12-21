
import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../../utils/constants'
import Menu from '../../../components/header'
import Rodape from '../../../components/footer'
import Titulo from '../../../components/titulo'


const CrudObjetivos = () => {
    const [idObjetivo, setidObjetivo] = useState('');
    const [idCategoria, setidCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [objetivos, setObjetivos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        listarObjetivos()
        listarCategorias()
    }, []);

    const listarCategorias = () => {
        fetch(url + '/categoria')

            
            
            .then(response => response.json())
            .then(data => {
                setCategorias(data)

            })
            .catch(err => console.error(err));
        
        }

    const listarObjetivos = () => {
        fetch(url + '/objetivo')

            
            
            .then(response => response.json())
            .then(data => {
                setObjetivos(data)
                console.log(objetivos)

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
            .then(dado => {
                setidObjetivo(dado.idObjetivo);
                setDescricao(dado.descricao);
                setidCategoria(dado.idCategoria);

            })
            .catch(err => console.error(err));
    }


    const excluir = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(url + '/objetivo/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Objetivo removido!')
                listarObjetivos()
            })
            .catch(err => console.error(err));
    }


    const salvar = (event) => {
        event.preventDefault();

        let objetivo = {
            //idCurso: idCurso,
            descricao: descricao,
            idCategoria: idCategoria

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
        setidObjetivo('');
        setidCategoria('');
        setDescricao('');
    }

    return (
        <div >
            <Menu />

            <Titulo
                titulo="Objetivos" chamada="Gerencie seus objetivos" />
            <Container style={{ marginTop: '4em' }}>
                <Card >
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formNome">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formCategoria">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control as="select" value={idCategoria} onChange={event => setidCategoria(event.target.value)}>
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

                            <Button type="submit" style={{ background: '#00d65f', borderColor: '#00d65f' }}>Salvar</Button>
                        </Form>

                    </Card.Body>
                </Card>
                <Table style={{ background: '#FFFFFF', borderRadius: '10px', marginTop: '2em' }} striped hover>
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
                                        <td>{item.idCategoria}</td>
                                        <td>
                                            <Button type="button" variant="primary" value={item.idCurso} onClick={event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger" value={item.idCurso} onClick={event => excluir(event)}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>


                </Table>
            </Container>
            <Rodape />
        </div>
    )
}

export default CrudObjetivos;