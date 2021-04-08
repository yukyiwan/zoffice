import React from 'react';
import { useSelector } from 'react-redux';

import SinglePerson from './Person/SinglePerson'

const ListPersons = () => {
    const persons = useSelector((state) => state.persons);
    console.log(persons);

    return ( 
        <React.Fragment>
            <div>
                <h2>Full Employee List</h2>
                <SinglePerson />
                <SinglePerson />
            </div>
        </React.Fragment>

     );
}
 
export default ListPersons;