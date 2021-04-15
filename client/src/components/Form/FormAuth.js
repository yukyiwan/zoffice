import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../actions/persons';

import { Form, Button} from 'react-bootstrap';

const FormAuth = () => {

    const history = useHistory();

    const [personData, setPersonData] = useState({ 
        email:'', pwd:''
    });

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(personData, history));

    }

    return (
        <>
            <img src="/images/logo.svg" className="pt-5 logo--width" alt="logo" />
            <h3 className="mb-4 mt-2 pt-3">Log In</h3>

                
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="formLabel">Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="sample@email.com" value={personData.email} onChange={(e) => setPersonData({ ...personData, email: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formLabel">Password</Form.Label>
                    <Form.Control type="password" name="pwd" value={personData.pwd} onChange={(e) => setPersonData({ ...personData, pwd: e.target.value})}/>
                    
                </Form.Group>
                
                <Button variant="primary" size="lg" type="submit">
                    Next
                </Button> <br/>

                <Form.Text className="text-muted px-5 mt-3">
                    Not yet on Z-Office? <a href="/Register">Register</a>
                </Form.Text>

                <Form.Text className="text-muted px-5 mt-3 mb-5">
                    Login through face recognition? <a href="/AuthFace">Face Recognition</a>
                </Form.Text>

            </Form>
        </>
    )
}

export default FormAuth;