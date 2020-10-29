import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Button } from 'react-bootstrap'
import './index.css'

const NotFound = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <div className='center'>
                <div className=' alert-success size-container-notfound rounded border border-success border-top-0  border-left-0 '>
                    <h1>404 Error</h1>
                    <p>Página Não Encontrada</p>
                    <Button variant="primary" href='/' >
                        Voltar para Home
                        </Button>
                </div>


            </div>

            <Footer />
        </div>
    )
};

export default NotFound;