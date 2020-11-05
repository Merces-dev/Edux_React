import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Titulo from '../../components/titulo';
import {url} from '../../utils/constants';

import {Tab, Col, Nav, Row, Container, Form, Button} from 'react-bootstrap';

const Turma  = () => {

    const [ id, setId ] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [turma, setTurmas] = useState([]);

    useEffect(() => {
        listarTurmas();
     },[]);

     const listarTurmas = () => {
        fetch(`${url}/Turma`)
        .then(response => response.json())
        .then(dados => {
            setTurmas(dados.data);

        })
        .catch(err => console.error(err));
    }

    const uploadFile = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <Header />
                    
            <Container>
            <Titulo titulo="Turmas" chamada="Genrencie as turmas" />


            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                                <Nav.Link eventKey="1">1º A Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link eventKey="2">1º B Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link eventKey="3">1º C Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link eventKey="4">2º A Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <       Nav.Link eventKey="5">2º B Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <       Nav.Link eventKey="6">2º C Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <       Nav.Link eventKey="7">3º A Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <       Nav.Link eventKey="8">3º B Ensino Médio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <       Nav.Link eventKey="9">3º C Ensino Médio</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="7">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="8">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="9">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>


                <Form>

                <Form.Group controlId="formNome">
                    <Form.Label>Novo Aluno</Form.Label>
                    <Form.Control type="text" placeholder="Didite o nome do aluno" />
                </Form.Group>
                <button type="submit" className="btn btn-success" >Salvar</button>

                </Form>

                
                   
                   
               
                










                </Container>
            <Footer />
        </div>
    )
}
 
export default Turma;