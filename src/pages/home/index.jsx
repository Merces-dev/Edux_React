import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Carousel, Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import carousel1 from '../../assets/img/Carrossel-1.png';
import carousel2 from '../../assets/img/Carrossel-2.png';
import './index.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel>
                <Carousel.Item >
                    <div >
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="Primeira imagem"

                        />

                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Segunda imagem"
                    />

                </Carousel.Item>
            </Carousel>

            <Jumbotron className="text-center">
                <h1>Plataforma e-learning completa e fácil de usar</h1>
                <p>
                E-learning completo para criar trilhas de aprendizagem com gamificação. Teste agora. 
                </p>
                <div className="mb-2">
                    <Button variant="info" size="lg" href="/login">
                        Login
                     </Button>{' '}
                    <Button variant="success" size="lg" href="/cadastrar">
                        Cadastre-se
                    </Button>
                </div>
            </Jumbotron>

            <Container>
                <Row className="text-center">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://image.freepik.com/free-vector/illustration-avatar-social-network-concept_53876-37162.jpg" />
                            <Card.Body>
                                <Card.Title>Tecnologia</Card.Title>
                                <Card.Text>
                                Acompanhe o desempenho dos cursos e alunos

                        </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://image.freepik.com/free-vector/people-with-web-design-concept-illustration_53876-64638.jpg" />
                            <Card.Body>
                                <Card.Title>Personalização</Card.Title>
                                <Card.Text>
                                Gerencie suas próprias postagens de forma gamificada
                            </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://image.freepik.com/free-vector/characters-people-their-social-network-illustration_53876-32594.jpg" />
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                Tenha controle total sobre turmas e cursos cadastrados
                            </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;