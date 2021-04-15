import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Person from './Person/Person'
import './Persons.scss';
import { getPersons } from '../../actions/persons'

const Persons = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const persons = useSelector((state) => state.persons);
    const time = 5*60*1000; //the first figure is minute, tested

    //load user presence after 5s making sure user updated info is in
    useEffect(() => {
        setTimeout(() => {
            dispatch(getPersons());
            }, 5000);
            }, []);

    //update the entire list to set the state to latest position every 5 mins
    useEffect(() => {
        const interval = setInterval(() => {
        dispatch(getPersons());
        }, time);
        return () => clearInterval(interval);
    }, []);

    // console.log(persons);

    const seat = "seat--";
    return ( 
        <>
            {persons.filter(person => person.cName === user?.result.cName && person.dName === user?.result.dName && person.online === true ).map((person, index) => (
                    <div key={person._id} className={seat+(index+1)}>
                    <Person person={person}/>
                    </div>
            ))} 
        </>

     );
}
 
export default Persons;
