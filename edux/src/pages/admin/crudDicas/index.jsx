import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../../utils/constants'
import Menu from '../../../components/header'
import Rodape from '../../../components/footer'
import Titulo from '../../../components/titulo'

const CrudDica = () => {
    const [idDica, setIdDica] = useState(0);
    const [idUsuario, setIdUsuario] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [dicas, setDicas] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [urlImagem, setUrlImagem] = useState('');
   

    useEffect(() => {
        listarDicas()
        listarUsuario()
    }, []);

    //listando usuario
    const listarUsuario = () => {

        fetch(`${url}/usuario`)
            .then(response => response.json())
            .then(dados => {
                setUsuario(dados.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    //listando dicas
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

        let formdata = new FormData();
        formdata.append('arquivo', event.target.files[0]);
        
        fetch(`${url}/upload`,
        {
            method : 'POST',
            body : formdata 
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setUrlImagem(data.url);
        })
        .catch(err => console.error(err))
    }

    //editando 
    const editar = (event) => {
     

        fetch(`${url}/dica/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dado => {
            setIdDica(dado.IdDica);
            setTitulo(dado.titulo);
            setIdUsuario(dado.idUsuario);
            setUrlImagem(dado.urlImagem);
            setTexto(dado.texto);

        })
    }

    //excluindo
    const excluir = (event) => {
      
        console.log(event.target.value)

        fetch(url + '/dica/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Dica removida!')
                listarDicas()
            })
    }

    const dica = {
        idDica : idDica,
        titulo: titulo,
        idUsuario: idUsuario,
        urlImagem : urlImagem,
        texto : texto,
    }

   

    const salvar = (dica) => {

        let method = (idDica === 0 ? 'POST' : 'PUT');
        let urlRequest = (idDica === 0 ? url + '/dica' : url + '/dica/' + idDica);


        fetch(urlRequest, {
            method: method,
            body: JSON.stringify({
                idDica : idDica,
                titulo: titulo,
                idUsuario: idUsuario,
                urlImagem : urlImagem,
                texto : texto,
            }),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => {
            if (response.ok) {
                console.log(response.json());

                alert('Dica cadastrada com sucesso!');
            }
        })
    }

    const limparCampos = () => {
        setIdDica(0);
        setTitulo(1);
        setIdUsuario(0);
        setUrlImagem('');
        setTexto('');
    }

    return (
        <div >
            <Menu />
           
            <Titulo
                    titulo="Dicas" chamada="Gerencie suas dicas" />
                    <Container style={{ marginTop: '4em' }}>
                  
                <Card >
                <Card.Body>
                        <Form onSubmit={event => salvar(dica)}>
                            <Form.Group controlId="formTitulo">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" value={titulo} onChange={event => setTitulo(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formTexto">
                                <Form.Label>Texto</Form.Label>
                                <Form.Control as="textarea"  rows={3} value={texto} onChange={event => setTexto(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formImagem">
                                <Form.File id="fileDica" label="Imagem da dica" onChange={event => uploadFile(event)} />
                                { urlImagem && <img src={urlImagem} style={{ width : '160px'}} />}
                            </Form.Group>

                            <Form.Group controlId="formUsuario">
                                <Form.Label>Usuário</Form.Label>
                                <Form.Control as="select" value={idUsuario} onChange={ event => setIdUsuario(event.target.value)}>
                                    <option value={0}>Selecione</option>
                                    {
                                        usuario.map((item, index) => {
                                            return (
                                                <option key={index} value={item.idUsuario}>{item.nome}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>

                            <Button type="submit" style={{ background: '#00d65f', borderColor: '#00d65f' }}>Salvar</Button>
                        </Form>
                        
                    </Card.Body>
                </Card>
                <Table style={{ background: '#FFFFFF', borderRadius: '10px', marginTop: '2em' }} striped hover>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Titulo</th>
                            <th>Texto</th>
                            <th>Usuário</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dicas.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={item.urlImagem} style={{ width : '120px'}}/></td>
                                        <td>{item.titulo}</td>
                                        <td>{item.texto}</td>
                                        <td>{item.idUsuario}</td>
                                        <td>
                                            <Button type="button" variant="primary" value={item.idDica} onClick={event => editar(event)}>Editar</Button>
                                            <Button type="button" variant="danger" value={item.idDica}  onClick={event => excluir(event)}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>


                </Table>
            </Container>
            <Rodape />
        </div>
    )
}

export default CrudDica;
