import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Home.scss';

function Home() {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="tdiv--position">
                        <img className="circle-animation" src="/images/circles_top.svg" alt="top circles" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="justify-content-center">
                    <div className="mdiv--position">
                        <img className="logo-animation" src="/images/logo.svg" alt="logo" /><br/>
                        <br/>
                        <Button variant="outline-primary" size="lg" className="fbtn--color btn--animate hbtn--width" href="/Register" >Register</Button><br/>
                        <br/>
                        <Button variant="outline-info" size="lg" href="/Auth" className="btn--animate hbtn--width" >Log In</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="bdiv--position">
                        <img className="circle-animation" src="/images/circles_btm.svg" alt="bottom circles" />
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Home
