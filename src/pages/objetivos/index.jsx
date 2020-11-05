import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Titulo from '../../components/titulo';
import { url } from '../../utils/constants';

const Objetivos = () => {
    const [ setObjetivos] = useState([]);

    useEffect(() => {
        listarObjetivos();
    }, [])

    
    const listarObjetivos = () => {
        fetch(`${url}/objetivos`)
            .then(response => response.json())
            .then(dados => {
                setObjetivos(dados.data);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header />
            <Container>

            <Titulo titulo="Objetivos" chamada="Confira os Objetivos!" />
                
                <div className="container">
                    
                    <table className="table" style={{marginTop : '40px'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Aluno</th>
                            <th scope="col">Turma</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Data Alcançada</th>
                            <th scope="col">Nota</th>
                        </tr>
                    </thead>
                </table>

                </div>

            </Container>
            <Footer />

        </div>
    )
}
export default Objetivos