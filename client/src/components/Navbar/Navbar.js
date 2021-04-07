import React from 'react';
import {Route,BrowserRouter as Router, Switch, Link} from "react-router-dom";
import { DoorClosed, PeopleFill, PersonFill, ThreeDots} from 'react-bootstrap-icons';
// import Nav from 'react-bootstrap/Nav';

import  './Navbar.scss';


function Navbar() {
    return (
        <div className="nav-bar">

            <div className="flex-container">
                <div className="nav-item">
                    <Link to="/Departments"><DoorClosed  color="#213B4F" size={25}/></Link>
                </div>
                <div className="nav-item">
                    <Link to="/FloorPlan"><PeopleFill color="#213B4F" size={25}/></Link>
                </div>        
                <div className="nav-item">
                    <Link to="/"><PersonFill color="#213B4F" size={25}/></Link>
                </div>  
                <div className="nav-item">
                    <Link to="/"><ThreeDots color="#213B4F" size={25}/></Link>
                </div>     
            </div>
                
        </div>
    )
}

export default Navbar
