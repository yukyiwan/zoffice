import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Home.scss';

function Home() {
    // setTimeout(function() {
    //     window.location.replace('./Home02.js');
    //   }, 3000);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="top">
                        <img className="top-animation" src="/images/circles_top.svg" alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="middle">
                        <a href="./Start" ><img className="logo-animation" src="/images/logo.svg" alt=""/></a>
                    </div>
                </Col>
            </Row>
            <Row align="center">
                <Col>
                    <div className="bottom">
                        <img className="top-animation" src="/images/circles_btm.svg" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Home
