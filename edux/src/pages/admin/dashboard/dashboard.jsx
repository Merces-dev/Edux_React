import React, { useState, useEffect } from 'react';
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Titulo from '../../../components/titulo'
import { Card, CardGroup , Button } from 'react-bootstrap';



const Dashboard = () => {

    return (

        <div>
            <Header />
            <Titulo titulo="Dashboard" chamada="Bem vindo!" />

            <CardGroup>
                <Card className="text-center">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Dicas</Card.Title>
                        <Card.Text>
                           Cadastre suas dicas
                   </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button href="/admin/cruddicas">Vamos</Button> 
                    </Card.Footer>
                </Card>
                <Card className="text-center">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Cursos</Card.Title>
                        <Card.Text>
                           Cadastre seus cursos
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button href="/admin/crudcursos">Vamos</Button> 
                    </Card.Footer>
                </Card>
                <Card className="text-center">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Objetivos</Card.Title>
                        <Card.Text>
                            Cadastre seus objetivos
                     </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button href="/admin/crudobjetivos">Vamos</Button> 
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Turmas</Card.Title>
                        <Card.Text>
                        Cadastre suas turmas
                     </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button href="/admin/crudobjetivos">Vamos</Button> 
                    </Card.Footer>
                </Card>
                
            </CardGroup>
            <Footer />
        </div>

    )

};

export default Dashboard;