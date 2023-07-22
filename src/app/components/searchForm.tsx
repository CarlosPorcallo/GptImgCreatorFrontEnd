import React, {useState, useRef} from 'react';

// Configuration
import {img_default, url_chatgpt} from '../config';

// Bootstrap Components
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

// Custom CSS
import "../../../styles/SearchForm.css";

// Middleware
import {ajax} from '../middleware/utils/ajax';

// Types
import { TEvent, IAjaxResponse, IAjaxPromptRequest } from '../types/general';

// redux
import { useDispatch } from "react-redux";
import { setImg, resetImg } from '@/app/middleware/redux/slices/ImageSlice';

const SearchForm = () => {
    const prompt = useRef("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const setPrompt = (e: TEvent) => {
        prompt.current = e.target.value;
    };

    const submit = () => {
        //e.PreventDefault();
        setLoading(true);
        dispatch(resetImg());

        const $ajax = new ajax();
        const success = (response_data: IAjaxResponse) => {
            dispatch(setImg(response_data.data)); 
            setLoading(false);
        };
        const error = () => { 
            setLoading(false);
            alert("Ocurrió un error al intentar generar tu imagen.") 
        };
        const request_data: IAjaxPromptRequest = {
            "message": prompt.current
        }
        $ajax.post(url_chatgpt, success, error, request_data);
    };

    return (
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
              className='mb-3 center'
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
                  >Generando imagen, por favor espera  <Spinner animation='border' role='status' size='sm'></Spinner></Button>
              )}
            </Form.Group>
        </Form>
    );
}
 
export default SearchForm;