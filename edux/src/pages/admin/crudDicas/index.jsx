import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, Table } from 'react-bootstrap';

import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Titulo from '../../../components/tituloDica';
import {url} from '../../../utils/constants';

const CrudDicas = () => {
    
    const [ id, setId ] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ urlImagem, setUrlImagem] = useState('');
    const [dicas, setDicas] = useState([]);

    useEffect(() => {
       listarDicas();
    },[]);

   
   const listarDicas = () => {
        fetch(`${url}/Dica`)
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
            setUrlImagem(data.url);
        })
        .catch(err => console.error(err))
    }

    const salvar = ( event) => {
        event.preventDefault();

        const dica = {
            titulo : titulo,
            urlImagem : urlImagem,
            descricao : descricao
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/dicas` :  `${url}/dicas/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(dica),
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
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
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.data.id);
            setTitulo(dado.data.titulo);
            setUrlImagem(dado.data.urlImagem);
            setDescricao(dado.data.descricao);
        })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/Dica/' + event.target.value,{
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
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
            setUrlImagem('');
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
                                <Form.File id="fileEvento" label="Imagem da dica" onChange={event => uploadFile(event)} />
                                { urlImagem && <img src={urlImagem} style={{ width : '160px'}} />}
                            </Form.Group>
                            
                            <Form.Group controlId="formDescricao">
                                <Form.Label>Descrição</Form.Label>
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
                            <tbody>
                                {
                                    dicas.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img src={item.urlImagem} style={{ width : '120px'}} /></td>
                                            <td>{item.titulo}</td>
                                            <td>{item.descricao}</td>
                                            <td>
                                                <Button type="button" variant="warning" value={item.id} onClick={ event => editar(event)}>Editar</Button>
                                                <Button type="button" variant="danger" value={item.id} style={{ marginLeft : '30px'}} onClick={ event => remover(event)}>Remover</Button>
                                            </td>
                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
            </Container>
        <Footer />
    </div>  
    )
}

export default CrudDicas;