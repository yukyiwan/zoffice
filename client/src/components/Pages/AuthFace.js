import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// import './Register.scss';
import FormAuthFace from '../Form/FormAuthFace';
import { getPersons } from '../../actions/persons'

const Auth = () => {
    // react-redux hook for actions // useEffect is use to mount state, later on will become the component updat
   
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPersons());
    }, [dispatch]);

    return ( 
        <Container className="flexC" fluid align="center">
            <div className="form--position">
                    <FormAuthFace />
            </div>
        </Container>
     );
}
 
export default Auth;