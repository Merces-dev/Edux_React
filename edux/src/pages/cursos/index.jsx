import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../utils/constants'
import Menu from '../../components/header'
import Rodape from '../../components/footer'
import Titulo from '../../components/titulo'

const CrudCurso = () => {
    const [idCurso, setIdCurso] = useState(0);
    const [idInstituicao, setidInstituicao] = useState(0);
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

        fetch(`${url}/curso/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dado => {
            setIdCurso(dado.idCurso);
            setTitulo(dado.titulo);
            setidInstituicao(dado.idInstituicao);
        })
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
    }

    const curso = {
        titulo: titulo,
        idInstituicao: idInstituicao
    }

    const salvar = (curso) => {

        let method = (idCurso === 0 ? 'POST' : 'PUT');
        let urlRequest = (idCurso === 0 ? url + '/curso' : url + '/curso/' + idCurso);


        fetch(urlRequest, {
            method: method,
            body: JSON.stringify({
                idCurso : idCurso,
                titulo: titulo,
                idInstituicao: idInstituicao
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => {
            if (response.ok) {
                console.log(response.json());

                alert('Curso cadastrado com sucesso!');
            }
        })
    }

    const limparCampos = () => {
        setIdCurso(0);
        setidInstituicao(0);
        setTitulo('');
    }

    return (
        <div >
            <Menu />
            
                <Titulo
                    titulo="Cursos" chamada="Verifique os cursos" />
                    <Container style={{ marginTop: '4em' }}>
                
                <Table style={{ background: '#FFFFFF', borderRadius: '10px', marginTop: '2em' }} striped hover>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Instituição</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cursos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.titulo}</td>
                                        <td>{item.idInstituicao}</td>
                                       
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
