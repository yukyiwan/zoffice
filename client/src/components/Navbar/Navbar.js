import React from 'react';
import { Link} from "react-router-dom";
import { DoorClosed, PeopleFill, PersonFill, ThreeDots, House} from 'react-bootstrap-icons';
// import Nav from 'react-bootstrap/Nav';

import  './Navbar.scss';


function Navbar() {
    return (
        <div className="nav--holder">

            <div className="nav--container">
                <div className="nav--item">
                    <Link to="/Floorplan">
                        <span className="btn--shape">
                            <House  size={28}  className="icon--flip" />
                        </span>
                    </Link>
                </div>
                <div className="nav--item">
                    <Link to="/Departments">
                        <span className="btn--shape">
                            <DoorClosed  className="icon--flip" size={28}/>
                        </span>
                    </Link>
                </div>
                <div className="nav--item">
                    <Link to="/GroupChat">
                        <span className="btn--shape">
                            <PeopleFill className="icon--flip" size={28}/>
                        </span>
                    </Link>
                </div>        
                <div className="nav--item">
                    <Link to="/DM">
                        <span className="btn--shape">
                            <PersonFill className="icon--flip" size={28}/>
                        </span>
                    </Link>
                </div>  
                <div className="nav--item">
                    <Link to="/ComSoon">
                        <span className="btn--shape">
                            <ThreeDots className="icon--flip" size={28}/>
                        </span>
                    </Link>
                </div>     
            </div>
                            
        </div>
    )
}

export default Navbar
