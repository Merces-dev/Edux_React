import React, { useState,useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Titulo from '../../components/titulo'
import { url } from '../../utils/constants';

const Ranking = () => {

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

        <Titulo titulo="Ranking" chamada="Veja o ranking de pontuação dos alunos" />
        <Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Pontuação</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.pontuacao}</td>
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

export default Ranking;