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

        <Titulo titulo="Ranking" chamada="Veja o ranking dos alunos" />
        <Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Pontuação total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Joao Paulo</td>
                    <td>92</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Livia Oliveira</td>
                    <td>73</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Ana Gomes</td>
                    <td>71</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Lucas Castro</td>
                    <td>54</td>
                </tr>
            </tbody>
            </Table>
        </Container>
        <Footer />
    </div>
    )

}

export default Ranking;