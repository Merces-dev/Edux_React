import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, Table } from 'react-bootstrap';

import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Titulo from '../../../components/titulo';
import {url} from '../../../utils/constants';

const CrudDicas = () => {
    
    const [ id, setId ] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ Imagem, setImagem] = useState('');
    const [dicas, setDicas] = useState([]);

    useEffect(() => {
       listarDicas();
    },[]);

   
   const listarDicas = () => {
        fetch(`${url}/dica`)
        .then(response => response.json())
        .then(dados => {
            setDicas(dados.data);

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
        .then(data =>{
            setImagem(data.url);
        })
        .catch(err => console.error(err))
    }


    const salvar = ( event) => {
        event.preventDefault();

        const dica = {
            titulo : titulo,
            Imagem : Imagem,
            descricao : descricao
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/dica` :  `${url}/dica/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(dica),
            headers : {
                'content-type' : 'application/json',
                // Authorization admin
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Dica salva');

            listarDicas();
        })
        .catch(err => console.error(err))
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/Dica/' + event.target.value, {
            method : 'PUT',
            headers : {
                // Authorization admin
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.data.id);
            setTitulo(dado.data.titulo);
            setImagem(dado.data.Imagem);
            setDescricao(dado.data.descricao);
        })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/Dica/' + event.target.value,{
            method : 'DELETE',
            headers : {
                // Authorization admin
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Dica removida');

            listarDicas();
        })
    }

    const limparCampos = () => {
        setId(0);
            setTitulo('');
            setImagem('');
            setDescricao('');
    }


    
    
    return(
        <div>
        <Header />
        <Container>
        
        <Titulo  titulo   = "Dicas" chamada="Gerencie suas postagens de dicas" />

        <Card>
                        <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formNome">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" value={titulo} onChange={event => setTitulo(event.target.value)} />
                            </Form.Group>    

                            <Form.Group controlId="formImagem">
                                <Form.File id="fileDica" label="Imagem da dica" onChange={event => uploadFile(event)} />
                                { Imagem && <img src={Imagem} style={{ width : '160px'}} />}
                            </Form.Group>
                            
                            <Form.Group controlId="formDescricao">
                                <Form.Label >Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} value={descricao} onChange={event => setDescricao(event.target.value)} />
                            </Form.Group>
                              
                            <Button type="submit" >Salvar</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Imagem</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                         
                        </Table>
                        </Card.Body>
                    </Card>
            </Container>
        <Footer />
    </div>  
    )
}

export default CrudDicas;