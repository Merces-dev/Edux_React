import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import jwt_decode from 'jwt-decode'
import './index.css'

const Perfil = () => {
    const token = localStorage.getItem('token-edux');
    const [datas, setDatas] = useState([]);

    fetch('http://localhost:5000/api/usuario/' + jwt_decode(token).family_name)
        .then(response => {
            return response.json();
        })
        .then(dados => {
            setDatas(dados);
            console.log(dados)
        })
        .catch(err => console.error(err));


    // const renderItem = () => {

    //     return (
    //         datas.map((item, index) => {
    //             return (
    //                 <div>
    //                     <h5>
    //                         {item.nome}
    //                     </h5>
    //                 </div>

    //             )
    //         })
    //     )

    // }





    return (
        <div >
            <Header />
            <br />
            <Container className=' alert-success br-15 '>
                <div className='d-flex align-items-center flex-column '>
                    <img className='imgperfil mg-p' src="https://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg" alt="Imagem de Perfil" />
                    <h3>{jwt_decode(token).family_name}</h3>
                    <h6>{jwt_decode(token).email}</h6>
                    {/* {renderItem()} */}
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