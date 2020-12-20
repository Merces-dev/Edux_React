import React, { useState, useEffect } from 'react';
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Titulo from '../../../components/titulo'
import { Card, CardGroup, Button } from 'react-bootstrap';



const Dashboard = () => {

    return (

        <div>
            <Header />
            <Titulo titulo="Dashboard" chamada="Bem vindo!" />

            <CardGroup>
                <Card className="text-center">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <img src="https://image.freepik.com/free-vector/schoolboy-standing-books-raising-hand-speaking-pupil-reading-home-task-report-flat-vector-illustration-school-education-knowledge_74855-8576.jpg" style={{ width: '250px' }} />
                        <Card.Title>Dicas</Card.Title>
                        <Card.Text>
                            Cadastre dicas para os alunos
                   </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/admin/cruddicas">Vamos</Button>
                    </Card.Footer>
                </Card>
                <Card className="text-center">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <img src="   https://image.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg" style={{ width: '390px', marginTop: '-09px' }} />
                        <Card.Title>Cursos</Card.Title>
                        <Card.Text>
                            Cadastre cursos
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/admin/crudcursos">Vamos</Button>
                    </Card.Footer>
                </Card>
                <Card className="text-center">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <img src="https://image.freepik.com/free-vector/students-studying-textbooks_74855-5294.jpg" style={{ width: '400px', marginTop: '-09px' }} />
                        <Card.Title>Objetivos</Card.Title>
                        <Card.Text>
                            Cadastre objetivos
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
                        <img src="https://image.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg" style={{ width: '350px', marginTop: '-09px' }} />

                        <Card.Title>Turmas</Card.Title>
                        <Card.Text>
                            Cadastre turmas
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