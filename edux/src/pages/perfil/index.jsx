import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import jwt_decode from 'jwt-decode'
import './index.css'

const Perfil = () => {
    const token = localStorage.getItem('token-edux')

    return (
        <div>
            <Header />
            <br />
            <Container className=' alert-success br-15 '>
                <div className='d-flex align-items-center flex-column '>
                    <img className='imgperfil mg-p' src="https://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg" alt="Imagem de Perfil" />
                    <h3>{jwt_decode(token).nameid}</h3>
                </div>
                <hr />
                <div className='d-flex align-items-center justify-content-around  '>
                    <div>
                        <h3>
                            Pontuação Geral
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Pontuação Objetivo
                        </h3>                   
                         </div>
                </div>
            </Container>
            <Footer />
        </div>


    )
}

export default Perfil;