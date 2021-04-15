import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PersonChat from './Person/PersonChat'
import { getPersons } from '../../actions/persons'

const PersonsChat = () => {
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
        <div className="dmbox--position"> 
            <div className="dmtitle--position">
                <h1>Direct Message</h1>
            </div> 
            <div className="dmlist--position">
                {persons.filter(person => person.cName === user?.result.cName && person.dName === user?.result.dName && person.online === true ).map((person, index) => (
                        
                        <PersonChat key={person._id} person={person}/>
                        
                ))} 
            </div>
        </div>

     );
}
 
export default PersonsChat;
