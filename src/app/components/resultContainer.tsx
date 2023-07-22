import React, { useEffect, useContext } from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

// Context
import AccordionContext from 'react-bootstrap/AccordionContext';

// redux
import { useSelector } from "react-redux";
import { ImageSelector } from '@/app/middleware/redux/slices/ImageSlice';

const ResultContainer = () => {
    const img = useSelector(ImageSelector);
    
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Resultado</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" src={img} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
 
export default ResultContainer;