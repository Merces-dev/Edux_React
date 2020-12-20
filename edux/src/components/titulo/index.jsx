import React from 'react';
import {Jumbotron} from 'react-bootstrap'

const Titulo = ({titulo, chamada}) => {
    return(
<Jumbotron >
    <h1  style={{color : '#9100D6'}}>{titulo}</h1>
        <p style={{fontSize : '23px', fontWeight : 'bolder'}}>{chamada}</p>
</Jumbotron>
    )
}

export default Titulo;
