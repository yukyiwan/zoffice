import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Persons from '../List/Persons';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Floorplan.scss';
import { getPersons } from '../../actions/persons'


function Floorplan() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersons());
    }, [dispatch]);

    return (
        <div className="box--position">
            <Header/>
            <div className="fpdiv--position">
                <img className="img--position" src="/images/floorplan.jpg" alt="floor plan"/>
                <Persons />
            </div>
            <Navbar/>
        </div>
    )
}

export default Floorplan
