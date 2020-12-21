import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

const Titulo = ({titulo, chamada}) => {
    return(
<Jumbotron >
    <Container>
    <h1  style={{color : '#9100D6'}}>{titulo}</h1>
        <p style={{fontSize : '23px', fontWeight : 'bolder'}}>{chamada}</p>
    </Container>

</Jumbotron>
    )
}

export default Titulo;
