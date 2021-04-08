import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import {Route,BrowserRouter as Router, Switch, Link} from "react-router-dom";
// import { useDispatch } from 'react-redux';

import './App.scss';
import Home from './components/Pages/Home';
import Start from './components/Pages/Start';
import Register from './components/Pages/Register';
import Auth from './components/Pages/Auth';
import PostLogin from './components/Pages/PostLogin';

const App = () => {
    // // react-redux hook for actions // useEffect is use to mount state, later on will become the component update
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPersons());
    // }, [dispatch]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       window.location.replace('/Home02');
    //     }, 3000);
    //     return () => clearTimeout(timer);
    //   }, []);

    return ( 
        
        <Router>
            <Switch>
                <Route path="/PostLogin" component={PostLogin} />   
                <Route path="/Auth" component={Auth} />
                <Route path="/Register" component={Register} />
                <Route path="/Start" component={Start} />
                <Route path="/" component={Home} />  
                    
            </Switch>
        </Router>
     );
}

export default App;