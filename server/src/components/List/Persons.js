import React from 'react';
import { useSelector } from 'react-redux';

import Person from './Person/Person'

import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

const Persons = () => {
    const persons = useSelector((state) => state.persons);
    console.log(persons);

    return ( 
        <>
            <div>
            <Container>
                <Row>
                    {persons.map((person) => (
                        <Col sm><Person key={person._id} person={person}/></Col>
                        ))} 
                </Row>
                </Container>
            </div>
        </>

     );
}
 
export default Persons;