import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Comsoon.scss';


function Comsoon() {
    return (
        <>
            <Header/>
            <div className="comDiv--position">
                <div className="comDiv--center">
                    <img src="/images/coming_soon.svg" className="comImg--size" alt="coming soon"/>
                </div>
            </div>
            <Navbar/>
        </>
    )
}

export default Comsoon

