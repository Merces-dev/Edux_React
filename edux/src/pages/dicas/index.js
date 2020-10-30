import React, { useEffect, useState } from 'react';
import {  Container, Row, Col, Card } from 'react-bootstrap';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Titulo from '../../components/titulo';
import {url} from '../../utils/constants';

const Dicas = () => {
    const [dicas, setDicas] = useState([]);

    useEffect(() => {
        listarDicas();
    },[])

    const listarDicas = () => {
        fetch(`${url}/dicas`)
        .then(response => response.json())
        .then(dados => {
            setDicas(dados.data);
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
     <Header />

    <Container>
    <Titulo titulo="Dicas" chamada="Confira todas as dicas!" />
    
            
    <br></br>
    <Row>
        
   {
    dicas.map((item, index) => {
        return (
        <Col xs='4'>
        <Card>
                <Card.Img variant="top" src={item.urlImagem} />
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Text>
                    {item.descricao}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
            </Col>
        )
    })
        }
    </Row>
    </Container>
    <Footer />
</div>
)
}

export default Dicas