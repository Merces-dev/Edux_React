
import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../../utils/constants'
import Menu from '../../../components/header'
import Rodape from '../../../components/footer'
import Titulo from '../../../components/titulo'


const CrudCurso = () => {
    const [idCurso, setIdCurso] = useState('');
    const [idInstituicao, setidInstituicao] = useState('');
    const [titulo, setTitulo] = useState('');
    const [cursos, setCursos] = useState([]);
    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        listarCursos()
        listarInstituicao()
    }, []);

    const listarInstituicao = () => {

        fetch(`${url}/instituicao`)
            .then(response => response.json())
            .then(dados => {
                setInstituicoes(dados.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const listarCursos = () => {

        fetch(`${url}/curso`)
            .then(response => response.json())
            .then(dados => {
                setCursos(dados.data);
                limparCampos();

            })
            .catch(err => console.error(err));
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/curso/' + event.target.value, {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dado => {
                setIdCurso(dado.idCurso);
                setTitulo(dado.titulo);
                setidInstituicao(dado.idInstituicao);

            })
            .catch(err => console.error(err));
    }


    const excluir = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(url + '/curso/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Curso removido!')
                listarCursos()
            })
            .catch(err => console.error(err));
    }


    const salvar = (event) => {
        event.preventDefault();

        let curso = {
            //idCurso: idCurso,
            titulo: titulo,
            idInstituicao: idInstituicao

        }


        let method = (idCurso === '' ? 'POST' : 'PUT');
        let urlRequest = (idCurso === '' ? url + '/curso' : url + '/curso/' + idCurso);


        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(curso),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(response => {
                alert('Curso salvo');
                limparCampos();
                listarCursos();
            })
            .catch(err => console.error(err))
    }

    const limparCampos = () => {
        setIdCurso('');
        setidInstituicao('');
        setTitulo('');
    }

    return (
        <div >
            <Menu />

            <Titulo
                titulo="Cursos" chamada="Gerencie seus cursos" />
            <Container style={{ marginTop: '4em' }}>
                <Card >
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formNome">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" value={titulo} onChange={event => setTitulo(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formInstituicao">
                                <Form.Label>Instituição</Form.Label>
                                <Form.Control as="select" value={idInstituicao} onChange={event => setidInstituicao(event.target.value)}>
                                    <option value={0}>Selecione</option>
                                    {
                                        instituicoes.map((item, index) => {
                                            return (
                                                <option key={index} value={item.idInstituicao}>{item.nome}</option>
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
                            <th>Titulo</th>
                            <th>Instituição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cursos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.titulo}</td>
                                        <td>{item.idInstituicaoNavigation.nome}</td>
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

export default CrudCurso;