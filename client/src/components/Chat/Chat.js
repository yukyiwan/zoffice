import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
// import { Container, Row, Col} from 'react-bootstrap';
import Chat from './ChatSocket';


function GroupChat() {
    return (
        <>
            <Header/>
            <Chat />
            <Navbar/>
        </>
    )
}

export default GroupChat;
