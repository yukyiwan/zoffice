import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../actions/persons';
// import { AUTH } from '../../constants/actionTypes';


import { Container, Row, Col, Form, Button} from 'react-bootstrap';

const FormAuth = () => {

    const history = useHistory();

    const [personData, setPersonData] = useState({ 
        email:'', pwd:''
    });
    // console.log(personData, history)
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        console.log(personData, history)
        e.preventDefault();
        dispatch(signIn(personData, history));
        window.location.replace("/PostLogin");
    }

    return (
        <Container>
            <h1>Log In</h1>
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="formLabel">Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="sample@email.com" value={personData.email} onChange={(e) => setPersonData({ ...personData, email: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formLabel">Password</Form.Label>
                    <Form.Control type="password" name="pwd" value={personData.pwd} onChange={(e) => setPersonData({ ...personData, pwd: e.target.value})}/>
                    <Form.Text className="text-muted">
                    Not yet on Z-Office yet? <a href="/Register">Register</a>
                    </Form.Text>
                </Form.Group>
                
                <Button className="px-5" variant="primary" size="lg" type="submit">
                    Next
                </Button>

            </Form>
        </Container>
    )
}

export default FormAuth;