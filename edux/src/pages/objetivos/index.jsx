import React, { useState,useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Titulo from '../../components/titulo'
import { url } from '../../utils/constants';

const Objetivos = () => {

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

        <Titulo titulo="Objetivos" chamada="Confira seus objetivos" />
        <Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Objetivo</th>
                    <th>Texto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>Crítico</td>
                    <td>Isso é um objetivo crítico</td>
                  
                   
                </tr>
                <tr>
                    
                    <td>Oculto</td>
                    <td>Isso é um objetivo oculto</td>
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

export default Objetivos;