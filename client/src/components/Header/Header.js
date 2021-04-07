import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Bell } from 'react-bootstrap-icons';

import { useDispatch } from 'react-redux'; 
import { useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';

import  './Header.scss';

function Header() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
    };

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);
    

    return (
        <div className="top-bar">
            <Container fluid>
                <Row>
                    <Col>
                    <div className="flex-container">
                        <div className="avatar">
                            <img src={user?.result.profilePic} alt="" />
                        </div>
                        <div className="nameAndState">
                            <div className="name">{user?.result.fName} {user?.result.lName}</div>
                            <div className="state">{user?.result.dName}</div>
                            <div className="state">{user?.result.title}</div>
                        </div>
                        <div className="searchBar">
                            <Search  color="#213B4F" size={25}/>
                        </div>
                        <div className="bell">
                            {/* <Button variant="contained" color="secondary" onClick={logout}>Logout</Button> */}
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
