import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const Person = ({person})=> {
    const dispatch = useDispatch();
    return (
        <div className="flex-container">
                        <div className="avatar">
                            <img src={person.profilePic} alt="" />
                        </div>
        </div>
    )
}

export default Person;