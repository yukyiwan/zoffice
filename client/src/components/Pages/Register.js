import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import './Register.scss';
import FormReg from '../Form/FormReg';
import ListPersons from '../List/ListPerson';
import { getPersons } from '../../actions/persons'

const Register = () => {
    // react-redux hook for actions // useEffect is use to mount state, later on will become the component update
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersons());
    }, [dispatch]);

    return ( 
        <Container fluid align="center">
            <h1>ZOffice</h1>
            <Container>
                <Row>
                    <Col>
                        <FormReg />
                    </Col>
                    <Col>
                        <ListPersons />
                    </Col>
                </Row>
            </Container>
        </Container>
     );
}
 
export default Register;