import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
// import { Container, Row, Col} from 'react-bootstrap';
import PersonsChat from '../List/PersonsChat';


function DM() {
    return (
        <>
            <Header/>
            <PersonsChat />
            <Navbar/>
        </>
    )
}

export default DM;
