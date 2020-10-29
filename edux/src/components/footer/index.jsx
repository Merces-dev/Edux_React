import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo-branco.png';
import '../footer/index.css';



const Footer = () => {
    return (
        <div className=' footer '>
            <br />
            <Navbar bg='success' variant='dark' className='justify-content-around text-white py-3 column align' >
                <Nav className='d-flex flex-column navTxtImg mt-30'>
                    <Navbar.Brand href="#home"><img src={logo} className="imgfooter " alt="Edux" /></Navbar.Brand>
                    <Nav.Item > Sua plataforma de estudos online</Nav.Item>
                </Nav>

                <Nav className='d-flex flex-column mt-30'>
                    <Nav.Item >Fale Conosco : </Nav.Item>
                    <Nav.Item >
                        <svg width="1.2em" height="2em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg> Edux@email.com
                        </Nav.Item>
                    <Nav.Item>
                        <svg width="1.1em" height="2em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                        </svg>  (11) 2222-2222
                        </Nav.Item>

                </Nav>
                <Nav className='d-flex flex-column navTxtImg mt-30'>
                    <Nav.Item>Fique Atualizado :</Nav.Item>
                    <br />
                    <form>
                        <label>
                            <input type="text" placeholder='Seu email aqui' />
                        </label>
                        <input type="submit" value="Enviar" />
                    </form>
                </Nav>

            </Navbar>

            <div className='text-center text-light bg-dark py-2'>
                &copy; {new Date().getFullYear()} Copyright: <a className='text-light' href="/"> Edux.com </a>
            </div>
        </div>

    )

}

export default Footer;
