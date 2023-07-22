// Bootstrap Components
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';

// Custom CSS
import "../styles/SearchForm.css";

// Custom Components
import SearchForm from '@/app/components/searchForm';
import ResultContainer from '@/app/components/resultContainer';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <Container className="p-5">
            <Row>
                <Col
                    xs={12}
                >
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Row>
                                <Card.Title className='center'>Generador de Imágenes con <Badge bg="secondary">Midjourney</Badge></Card.Title><br /><br /><br />
                                <Col xs={12} sm={7}>
                                    <Card.Text className='center'>
                                        Ingresa a continuación tu prompt y da click en "Comenzar" para generar una nueva imagen.
                                    </Card.Text>
                                    <SearchForm />
                                </Col>
                                <Col xs={12} sm={5}>
                                    <ResultContainer />
                                </Col>
                            </Row>
                            <br /><br />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Home;