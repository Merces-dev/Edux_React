import React, { useState, useEffect } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Titulo from '../../../components/titulo';
import { Table, Container, Button } from 'react-bootstrap';
import { url } from '../../../utils/constants';


const Dashboard = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    

    const listar = () => {
        fetch(url + '/usuario')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)
                console.log(data)
            })
            .catch(err => console.error(err));
        
    }

    useEffect(() => {
        listar();
    }, []);
    

    const editar = (event) => {


        console.log(event.target.value);
    }

    const remover = (event) => {


        console.log(event.target.value);
    }

    return(

        <div>
        <Header />
        <Titulo titulo="Dashboard" chamada="Gerencie os alunos" />
        <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>
                                    <Button variant="primary" value={item.id} onClick={event => editar(event)} >Editar</Button>
                                    <Button variant="danger" value={item.id} onClick={event => remover(event)} style={{ marginLeft : '15px' }} >Remover</Button>
                                </td>
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

};

export default Dashboard;