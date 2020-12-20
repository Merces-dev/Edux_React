import React, { useEffect, useState } from 'react';
import { url } from '../../../utils/constants';
import Menu from '../../../components/header';
import Rodape from '../../../components/footer';
import Titulo from '../../../components/titulo'

import {Form, Button, Table, Card, Container} from 'react-bootstrap';

const CrudTurmas = () => {
    const [idTurmas, setIdTurmas]   = useState(0);
    const [nomeAluno,setNomeAluno]  = useState('');
    const [descricao, setDescricao] = useState(''); 

    const [turmas, setTurmas]       = useState([]);

  
    //Adiconar um aluno na turma.............................................................................



    




    useEffect(() => {
        listarAlunos();
    }, [])

    //Listando os alunos na Turmas.....................................................................
    const listarAlunos = () => {
        fetch(`${url}/api/Turma`)
        .then(response => response.json())
        .then(dados => {
            setTurmas(dados.data);

        })
        .catch(err => console.error(err));
    }

    //salvando um aluno novo na turma.....................................................................
    const salvar = (event) => {

        let method = (idTurmas === 0 ? 'POST' : 'PUT');
        let urlRequest = (idTurmas === 0 ? url + '/api/Turma' : url + '/turma/' + idTurmas);


        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(turmas),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Aluno salvo');

            listarAlunos();
        })
        .catch(err => console.error(err))
    }
    // Limpar campos..................................................................................
    const limparCampos = () => {
        setIdTurmas(0);
        setNomeAluno('');
        setDescricao('');
    }


    // Remover um aluno da Turma.....................................................................
    const  remover = (event) => {
        event.preventDefault();

        fetch(url + '/turma/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Aluno removido')
                listarAlunos()
            })
    }

    //Editando um aluno da turma.....................................................................
    const editar = (event) => {
        event.preventDefault();

        fetch(url + 'turma' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setIdTurmas(dado.data.id);
            setNomeAluno(dado.data.nomeAluno);
            setDescricao(dado.data.descricao);
            
        })
        .catch(err => console.error(err));
    }
    //Html da Pagina WeB.................................................................................

    return(
        <div>

            <Menu />

            
            <Titulo
                    titulo="Turmas" chamada="Gerencie os seus Alunos" />

            <Container>
            <Card>

                
                    <Card.Body>

                    <Form onSubmit={event => salvar(event)}>

                        <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nomeAluno} onChange={event => setNomeAluno(event.target.value)} placeholder="Nome do Aluno"></Form.Control>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicUrl">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} value={descricao} onChange={event => setDescricao(event.target.value)}/>
                            </Form.Group>
                            
                            <Button type="submit" style={{ background: '#00d65f', borderColor: '#00d65f' }}>Salvar</Button>

                        </Form>

                    </Card.Body>
            </Card>

            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome Aluno</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    
                    <tbody>

                    {
                            turmas.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.descricao}</td>
                                        <td>
                                            <Button variant="warning" value={item.id} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.id} onClick={event => remover(event)} style={{ marginLeft : '40px'}}>Remover</Button>
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