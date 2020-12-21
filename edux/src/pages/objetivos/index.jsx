import React, { useState,useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Titulo from '../../components/titulo'
import { url } from '../../utils/constants';

const Objetivos = () => {

    const [categorias, setCategorias] = useState([]);
    const [objetivos, setObjetivos] = useState([]);


    useEffect(() => {
        listarCategorias();
        listarObjetivos();
    }, []);




    const listarCategorias = () => {
        fetch(url + '/categoria')

            
            
            .then(response => response.json())
            .then(data => {
                setCategorias(data)

            })
            .catch(err => console.error(err));
        
        }
        
    const listarObjetivos = () => {
        fetch(url + '/objetivo')

            
            
            .then(response => response.json())
            .then(data => {
                setObjetivos(data)
                console.log(objetivos)

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
                    <th>Tipos</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {
                categorias.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.tipo}</td>
                            <td>Esse é um tipo {item.tipo}</td>

                            </tr>
                        )
                    })

                }
            </tbody>
            </Table>

            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Objetivos</th>
                </tr>
            </thead>
            <tbody>
                {
                objetivos.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.descricao}</td>

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

export default Objetivos;