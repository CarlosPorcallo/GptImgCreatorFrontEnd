import React, {useState, useRef} from 'react';

// Configuration
import {img_default, url_chatgpt} from '../src/app/config';

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

// Middleware
import {ajax} from '../src/app/middleware/utils/ajax';

// Types
import {TEvent, IAjaxResponse} from '../src/app/types/general';

const Home = () => {
    const prompt = useRef("");
    const [img, setImg] = useState(img_default);
    const [loading, setLoading] = useState(false);

    const setPrompt = (e: TEvent) => {
        prompt.current = e.target.value;
    };

    const submit = () => {
        //e.PreventDefault();
        setLoading(true);

        const $ajax = new ajax();
        const success = (response_data: IAjaxResponse) => {
            setImg("data:image/jpg;base64,"+response_data.data) 
            setLoading(false);
        };
        const error = () => { 
            setLoading(false);
            alert("Ocurrió un error al intentar generar tu imagen.") 
        };
        const request_data = {
            "message": prompt.current
        }
        $ajax.post(url_chatgpt, success, error, request_data);
    };

    return (
        <Container className="p-5">
            <Row>
                <Col
                    xs={12}
                    md={{span: 8, offset: 2}}
                    lg={{span: 8, offset: 2}}
                >
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Generador de Imágenes con Midjourney</Card.Title>
                            <Card.Text>
                                Ingresa a continuación tu prompt y da click en "Comenzar" para generar una nueva imagen.
                            </Card.Text>
                            <Form>
                                <br />
                                <Form.Group className='mb-3'>
                                    <Form.Control 
                                        as="textarea"
                                        rows={3}
                                        onChange={setPrompt}
                                    />
                                </Form.Group><br />
                                <Form.Group 
                                  className='mb-3'
                                  style={{textAlign: "center"}}
                                >
                                  {!loading ? (
                                      <Button 
                                          variant="primary"
                                          onClick={submit}
                                      >Comenzar</Button>
                                  ) : (
                                      <Button
                                          variant="primary"
                                          disabled={true}
                                      >Generando imagen, por favor espera</Button>
                                  )}
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Home;