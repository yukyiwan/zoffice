// import React from 'react';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPersons} from '../../actions/persons';
import { Button, Form } from 'react-bootstrap';

import {Route,BrowserRouter as Router, Switch, Link} from "react-router-dom";
import { Container } from 'react-bootstrap';


import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Floorplan from '../Floorplan/Floorplan';

const PostLogin = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPersons());
    }, [dispatch]);


    return (
        <div>
            <Header />
            <Router>
            <Switch>
                <Route path="/" component={Floorplan} />  
            </Switch>
            </Router>
            <Navbar />
        </div>
    )
}

export default PostLogin
