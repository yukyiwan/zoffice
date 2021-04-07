import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Start.scss';

function Start() {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="top">
                        <img src="/images/circles_top.svg" alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="middle">
                        <img src="/images/logo.svg" alt="" />
                    </div>
                </Col>

                

            </Row>
            
            <Row className="justify-content-center">
                <Button variant="primary" size="lg" href="/Register" >Register</Button><br/>
            </Row>

            <Row className="justify-content-center">
                <Button variant="primary" size="lg" href="/Auth" >Log In</Button>
            </Row>

            <Row>
                <Col>
                    <div className="bottom">
                        <img src="/images/circles_btm.svg" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Start
