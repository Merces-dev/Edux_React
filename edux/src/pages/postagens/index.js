import React from 'react';
import { Table, Form, Button,  Spinner } from 'react-bootstrap';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Titulo from '../../components/titulo';
import '../postagens/index.css';

const Postagens = () => {
    return(
        <div>
        <Header />

        <Titulo  titulo   = "Postagens" chamada="Confira as principais postagens!" />
        
        <div className="d-flex flex-row bd-highlight mb-3" >

        <Form>
        <Form.Group controlId="formDescricao">

           <Form.Label style={{marginLeft : '2%', fontWeight : 'bolder', fontSize : '17px'}}>Campo de mensagem</Form.Label>
         <Form.Control style={{backgroundColor : 'wheat'}} as="textarea" rows={3} />
         <Button style={{marginTop : '5%', marginLeft : '2%',}} variant="primary">Publicar</Button>
             </Form.Group>

        </Form>
      
        <div className="d-flex flex-row bd-highlight mb-3">
        <h2 > Mensagens </h2>
        <Spinner style={{height : '15px', width : '15px'}} animation="grow" variant="primary" />
        </div>
  
        </div>
        
      

        <Table  striped bordered hover size="sm">

     <tr >
      <th >Alunos</th>
    </tr>

  <tbody>
    <tr>
      <td >Mark</td>
    </tr>
    <tr>
      <td >Jacob</td>
    </tr>
    <tr>    
      <td >Larry</td>
    </tr>
  </tbody>

</Table>
     
        <Footer />
    </div>  
    )
}

export default Postagens;