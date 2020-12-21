import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../utils/constants'
import Menu from '../../components/header'
import Rodape from '../../components/footer'
import Titulo from '../../components/titulo'

const CrudCurso = () => {
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
            })
            .catch(err => console.error(err));
    }

    const listarCursos = () => {

        fetch(`${url}/curso`)
            .then(response => response.json())
            .then(dados => {
                setCursos(dados.data);

            })
            .catch(err => console.error(err));
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
                                        <td>{item.idInstituicaoNavigation.nome}</td>
                                       
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
