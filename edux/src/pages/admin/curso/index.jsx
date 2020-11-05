import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, Table } from 'react-bootstrap';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TituloPag from '../../../components/titulo';
import { url } from '../../../utils/constants';

const CrudCurso = () => {
    const [idCurso, setidCurso] = useState(0);
    const [idInstituicao, setidInstituicao] = useState('');
    const [Titulo, setTitulo] = useState('');
    const [instituicoes, setInstituicoes] = useState([]);
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        listarInstituicoes();
        listarCursos();
    }, []);

    const listarInstituicoes = () => {

        fetch(`${url}/instituicao`)
            .then(response => response.json())
            .then(dados => {
                setInstituicoes(dados.data);
            
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

    const salvar = (event) => {
        event.preventDefault();

        const curso = {
            Titulo : Titulo,
            idInstituicao : idInstituicao
           
        }

        let method = (idCurso === 0 ? 'POST' : 'PUT');
        let urlRequest = (idCurso === 0 ? `${url}/curso` : `${url}/curso/${idCurso}`);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(curso),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Curso Cadastrado');

                listarCursos();
            })
            .catch(err => console.error(err))
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
                setidCurso(dado.data.id);
                setTitulo(dado.data.titulo);
                setidInstituicao(dado.data.id)
              
            })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/curso/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Curso removido');

                listarCursos();
            })
    }

    const limparCampos = () => {
        setidCurso(0);
        setTitulo('');
        setidInstituicao('');

    }

    return (
        <div>
            <Header />
            <Container>
                <TituloPag titulo="Cursos" chamada="Visão geral dos cursos" />

                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formTitulo">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" value={Titulo} onChange={event => setTitulo(event.target.value)} placeholder="Insira o nome do cursos" />
                            </Form.Group>

                            <Form.Group controlId="formInstituicoes">
                                <Form.Label>Instituicoes</Form.Label>
                                <Form.Control as="select" value={idInstituicao} onChange={event => setidInstituicao(event.target.value)}>
                                    <option value={0}>Selecione</option>
                                    {
                                        instituicoes.map((item, index) => {
                                            return (
                                                <option key={index} value={item.IdInstituicao}>{item.nome}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>

                            <Button type="submit" >Salvar</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                   <Table bordered>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Instituicão</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cursos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.titulo}</td>
                                        <td>{item.instituicoes.nome}</td>
                                        <td>
                                            <Button type="button" variant="warning" value={item.id} onClick={ event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger" value={item.id} style={{ marginLeft : '30px'}} onClick={ event => remover(event)}>Remover</Button>
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

}

export default CrudCurso;