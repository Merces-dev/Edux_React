import React, { useState,useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import jwt_decode from 'jwt-decode'
import './index.css'

const Perfil = () => {
    const token = localStorage.getItem('token-edux')


    return (
        <div >
            <Header />
            <br />
            <Container className=' alert-success br-15 '>
                <div className='d-flex align-items-center flex-column '>
                    <img className='imgperfil mg-p' src="https://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg" alt="Imagem de Perfil" />
                    <h3>{jwt_decode(token).nameid}</h3>
                    <h7>{jwt_decode(token).email}</h7>

                </div>
                <hr />
                <div className='d-flex align-items-center flex-column   '>
                    <div className='d-flex'>
                        <div className='text-center  divPontuacao'>
                            <h3>
                                Pontuação Geral
                        </h3>
                            <h5>
                                {jwt_decode(token).pontuacao}
                            </h5>
                        </div>

                        <div className='text-center divPontuacao'>
                            <h3>
                                Pontuação Objetivo
                        </h3>
                        </div>

                    </div>
                    <Button variant="primary" className='mg-p' href="/ranking"> Visualizar Ranking</Button>


                </div>

            </Container>
            <Footer />
        </div>


    )
}

export default Perfil;