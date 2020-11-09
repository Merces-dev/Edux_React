import React, { useState,useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Titulo from '../../components/titulo'
import { url } from '../../utils/constants';

const Timeline = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listar();
    }, []);




    const listar = () => {
        fetch(url + '/usuario')

            
            
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)

            })
            .catch(err => console.error(err));
        
        }
    
    return(
    <div>

        <Header />

        <Titulo titulo="Bem vindo" chamada="Veja o progresso da sua turma" />
        <Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Título da última postagem</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>Maria Eduarda</td>
                    <td>"Alguém pode me ajudar?"</td>
                   <td>
                   <Button type="button" variant="primary">Ver Postagem</Button>
                   </td>
                   
                </tr>
                <tr>
                    
                    <td>Mateus Gatti</td>
                    <td>"Dúvida com essa questão de química!"</td>
                    <td>
                   <Button type="button" variant="primary">Ver Postagem</Button>
                   </td>
                </tr>
                <tr>
                    
                    <td>Giovani Merces</td>
                    <td>"Como fazer essa conta de matemática?"</td>
                    <td>
                   <Button type="button" variant="primary">Ver Postagem</Button>
                   </td>
                </tr>
                <tr>
                    
                    <td>Henrique Leandro</td>
                    <td>"Não consigo conectar com a API"</td>
                    <td>
                   <Button type="button" variant="primary">Ver Postagem</Button>
                   </td>
                </tr>
            </tbody>
            </Table>
        </Container>
        <Footer />
    </div>
    )

}

export default Timeline;