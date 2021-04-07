import React from 'react';
import { useDispatch } from 'react-redux';

const Person = ({person}) => {
    const dispatch = useDispatch();
    return ( 
        <>
        <p>{person.fName} {person.lName}</p>
        <img src={person.profilePic} />
        </>
     );
}
 
export default Person;