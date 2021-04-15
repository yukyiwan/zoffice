import React from 'react';
import {Link} from "react-router-dom";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { PlusCircle} from 'react-bootstrap-icons';
import './Departments.scss';

function Departments() {
    return (
        <>
            <Header/>
            <div className="depDiv--position">
                <Link to="/ComSoon">
                <PlusCircle size={28} className="btn--add"/>
                </Link>
                <Link to="/Departments">
                    <div className="btn01--flip">
                        <div className="vertical-center"><h2>HR</h2></div>
                    </div>
                </Link>
                <Link to="/Departments">
                    <div className="btn02--flip">
                        <div className="vertical-center"><h2>Marketing</h2></div>
                    </div>
                </Link>
                <Link to="/Departments">
                    <div className="btn03--flip">
                        <div className="vertical-center"><h2>Finance</h2></div>
                    </div>
                </Link>
                <Link to="/Departments">
                    <div className="btn04--flip">
                        <div className="vertical-center"><h2>IT</h2></div>
                    </div>
                </Link>
                
            </div>
            <Navbar/>
        </>
    )
}

export default Departments

