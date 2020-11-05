import React, { useEffect, useState } from 'react';
import {Container,Form, Col, Button} from 'react-bootstrap';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Titulo from '../../../components/titulo';
import {url} from '../../../utils/constants';


const CrudObjetivos  = () => {
       
    const [ id, setId ] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [setObjetivos] = useState([]);

    useEffect(() => {
       listarObjetivos();
    },[]);

   
   const listarObjetivos = () => {
        fetch(`${url}/Objetivos`)
        .then(response => response.json())
        .then(dados => {
            setObjetivos(dados.data);

            limparCampos();
        })
        .catch(err => console.error(err));
    }

    const uploadFile = (event) => {
        event.preventDefault()


        console.log(event);

        let formdata = new FormData();
        formdata.append('arquivo', event.target.files[0]);
        
        fetch(`${url}/upload`,
        {
            method : 'POST',
            body : formdata 
        })
        .then(response => response.json())
        .catch(err => console.error(err))
    }

    const salvar = ( event) => {
        event.preventDefault();

        const objetivo = {
            titulo : titulo,
            descricao : descricao
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/objetivos` :  `${url}/objetivos/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(objetivo),
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Objetivo salvo');

            listarObjetivos();
        })
        .catch(err => console.error(err))
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/Objetivo/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.data.id);
            setTitulo(dado.data.titulo);
            setDescricao(dado.data.descricao);
        })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/Objetivo/' + event.target.value,{
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Objetivo removida');

            listarObjetivos();
            
        })
    }

    const limparCampos = () => {
        setId(0);
            setTitulo('');
            setDescricao('');
    }
    
        return(
            <div>

                <Header />
                <Container>

                <Titulo  titulo= "Objetivos" chamada="Gerencie os Objetivos"/>

        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do aluno" />
                </Form.Group>

                <Form.Group as={Col} controlId="formTurmas">
                <Form.Label>Turmas</Form.Label>
                <Form.Control as="select">
                    <option>1ºA EM</option>
                    <option>1ºB EM</option>
                    <option>1ºC EM</option>
                    <option>2ºA EM</option>
                    <option>2ºB EM</option>
                    <option>2ºC EM</option>
                </Form.Control>
                </Form.Group>

            </Form.Row>

                <Form.Group controlId="formObjetivo">
                    <Form.Label>Objetivo</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Digite o objetivo" />
                </Form.Group>

            <Form.Row>
                <Form.Group controlId="formNota">
                    <Form.Label>Nota</Form.Label>
                    <Form.Control placeholder="Digite a nota" />
                </Form.Group>
            </Form.Row>

            <button type="submit" className="btn btn-success" >Salvar</button>
            <button type="button" className="btn btn-secondary" style={{marginLeft : '40px'}}>Cancelar</button>

        </Form>


                <div>
                    
                    <table className="table" style={{marginTop : '40px'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Alunos</th>
                            <th scope="col">Turma</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Data Alcançada</th>
                            <th scope="col">Notas</th>
                        </tr>
                    </thead>
                </table>

                </div>
                </Container>
                <Footer />
            </div>
        )
}
export default CrudObjetivos;