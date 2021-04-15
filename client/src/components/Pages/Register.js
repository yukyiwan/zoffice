import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import FormReg from '../Form/FormReg';
import { getPersons } from '../../actions/persons'

const Register = () => {
    // react-redux hook for actions // useEffect is use to mount state, later on will become the component update
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersons());
    }, [dispatch]);

    return ( 
        <Container className="flexC" fluid align="center">
            <div className="form--position">
                <FormReg />
            </div>
        </Container>
     );
}
 
export default Register;