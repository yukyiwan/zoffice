import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// import './Register.scss';
import FormAuth from '../Form/FormAuth';

const Auth = () => {
    // react-redux hook for actions // useEffect is use to mount state, later on will become the component updat

    return ( 
        <Container fluid align="center">
            <h1>ZOffice</h1>
            <Container>
                <Row>
                    <Col>
                        <FormAuth />
                    </Col>
                </Row>
            </Container>
        </Container>
     );
}
 
export default Auth;