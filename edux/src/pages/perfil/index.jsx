import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import Menu from '../../components/header';
import Titulo from '../../components/tituloDica';
import Rodape from '../../components/footer';

const Perfil = () => {
    return (
        <div>
            <Menu />
            <Titulo titulo="Usuário" chamada="Verifique suas informações" />
            <Container>
                {/* <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>Perfil</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table> */}
                <div className="imagemcenter">
                    <img src="https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png" alt="Perfil"/>
                </div>
                <ListGroup className="tabelasize">
                    <ListGroup.Item className="tituloPerfil">Perfil</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Nome: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Email: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Turma: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Intituição: ...</ListGroup.Item>
                    <ListGroup.Item className="infoPerfil" >Tipo de Usuário: ...</ListGroup.Item>
                </ListGroup>
                <Button variant="warning" size="lg" className="centralizar">Editar</Button>
            </Container>
            <Rodape />
        </div>
    )
}

export default Perfil;