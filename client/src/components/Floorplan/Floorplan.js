import React from 'react';
import Persons from '../List/Persons';
import './Floorplan.scss';


function Floorplan() {
    return (
        <div>
            <div className="floorPlan-box">
                <img src="/images/floorplan.jpg" alt="floor plan"/>
                <Persons />
            </div>
           
        </div>
    )
}

export default Floorplan
