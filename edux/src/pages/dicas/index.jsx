import React, { useState,useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Titulo from '../../components/titulo'
import { url } from '../../utils/constants';

const Dicas = () => {

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

        <Titulo titulo="Dicas" chamada="Confira suas dicas" />
        <Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Professor</th>
                    <th>Dica</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>Paulo Brandão</td>
                    <td>Lembre-se do espaço ao escrever o 'Bearer '</td>
                  
                   
                </tr>
                <tr>
                    
                    <td>Fernando Henrique</td>
                    <td>Cuidado com as sabotagens</td>
                    <td>
                  
                   </td>
                </tr>
               
            </tbody>
            </Table>
        </Container>
        <Footer />
    </div>
    )

}

export default Dicas;