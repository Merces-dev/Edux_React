import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../../utils/constants'
import Menu from '../../../components/header'
import Rodape from '../../../components/footer'
import Titulo from '../../../components/titulo'


const CrudTurmas = () => {
    const [idCurso, setIdCurso] = useState('');
    const [idTurma, setIdTurma] = useState ('');
    const [turma, setTurma] = useState([]);
    const [descricao, setDescricao] = useState ('')


    useEffect(() => {
        listarTurmas()
    }, []);


    const listarTurmas = () => {

        fetch(`${url}/turma`)
            .then(response => response.json())
            .then(data => {
                setTurma(data);
                limparCampos();

            })
            .catch(err => console.error(err));
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value, {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dado => {
                setIdTurma(dado.idTurma);
                setDescricao(dado.descricao);
                setIdCurso(dado.idCurso);

            })
            .catch(err => console.error(err));
    }


    const excluir = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(url + '/turma/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Turma removida!')
                listarTurmas()
            })
            .catch(err => console.error(err));
    }


    const salvar = (event) => {
        event.preventDefault();

        let turma = {
            descricao : descricao,
            idCurso : idCurso,
        }
        


        let method = (idTurma === '' ? 'POST' : 'PUT');
        let urlRequest = (idTurma === '' ? url + '/turma' : url + '/turma/' + idTurma);


        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(turma),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(response => {
                alert('Turma salva');
                limparCampos();
                listarTurmas();
            })
            .catch(err => console.error(err))
    }

    const limparCampos = () => {
        setIdTurma('');
        setDescricao('');
        setIdCurso('');
    }

    return (
        <div >
            <Menu />

            <Titulo
                titulo="Turmas" chamada="Gerencie suas Turmas" />
            <Container style={{ marginTop: '4em' }}>
                <Card >
                    <Card.Body>
                    <Form onSubmit={event => salvar(event)}>

                   

                    <Form.Group controlId="formDescricao">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={1} value={descricao} onChange={event => setDescricao(event.target.value)}/>
                    </Form.Group>

                    <Button type="submit" style={{ background: '#00d65f', borderColor: '#00d65f' }}>Salvar</Button>

                    </Form>

                    </Card.Body>
                </Card>
                <Table style={{ background: '#FFFFFF', borderRadius: '10px', marginTop: '2em' }} striped hover>
                    
                    <thead>
                        <tr>
                            <th>Descrição</th>
                          
                            <th>Ações</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            turma.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.descricao}</td>
                                        
                                        <td>
                                            <Button type="button" variant="primary" value={item.idTurma} onClick={event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger" value={item.idTurma} onClick={event => excluir(event)}>Excluir</Button>
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

export default CrudTurmas;