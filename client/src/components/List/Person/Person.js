import React, {useState} from 'react';
// import { useDispatch } from 'react-redux';
import {Container, Col, Row, Image, Modal, Button} from 'react-bootstrap';
import { Mic} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
const Person = ({person}) => {

    // const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
                <Image src={person.profilePic} className="avatar--shape" alt="" roundedCircle
                    onClick={handleShow}/>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        <span>
                            <Image src={person.profilePic} className="avatar--shape" alt="" roundedCircle/>
                            <div>{person.fName} {person.lName}</div>
                        </span>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                            <div>{person.dName}</div>
                            <div>{person.title}</div>
                            </Col>
                            <Col xs={6} md={4}>
                            <Link to="/ComSoon"><Mic /></Link>
                            </Col>
                        </Row>

                    </Container>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
     );
}
 
export default Person;