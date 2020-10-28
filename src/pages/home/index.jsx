import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../assets/img/Carrossel-1.png';
import carousel2 from '../../assets/img/Carrossel-2.png';

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel>
                <Carousel.Item >
                    <div >
                        <img
                            className="d-block w-100" id='opacity'
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
            <Footer />
        </div>
    )
}

export default Home;