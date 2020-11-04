import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Turmas from '../../assets/img/Turmas.png';
import './index.css';
import {url} from '../../utils/constants';
import {Tab, Col, Nav, Row, Button} from 'react-bootstrap';

const Turma  = () => {

    // const [ id, setId ] = useState(0);
    // const [titulo, setTitulo] = useState('');
    // const [descricao, setDescricao] = useState('');
    // const [turma, setTurma] = useState([]);

    // useEffect(() => {
    //     listarTurmas();
    //  },[]);

    //  const listarTurmas = () => {
    //     fetch(`${url}/Turma`)
    //     .then(response => response.json())
    //     .then(dados => {
    //         setTurmas(dados.data);

    //         limparCampos();
    //     })
    //     .catch(err => console.error(err));
    // }

    // const uploadFile = (event) => {
    //     event.preventDefault()
    // }

    return(
        <div>
            <Header />

            < img src = { Turmas } alt = "Turmas" /> ;

            <h1>Turmas</h1>
                    
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                                <Nav.Link eventKey="first">1 Ensino Fundamental</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link eventKey="second">2 Ensino Fundamental</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link eventKey="third">3 Ensino Fundamental</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link eventKey="fourth">4 Ensino Fundamental</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <       Nav.Link eventKey="fifth">5 Ensino Fundamental</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
    
                <Button variant="success" style={{marginLeft : '40px'}}>Nova Turma</Button>{' '}


            <Footer />
        </div>
    )
}
 
export default Turma;