import React, {useState} from 'react';
// import { useDispatch } from 'react-redux';
import {Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-bootstrap-icons';
import './PersonChat.scss';

const Person = ({person}) => {

    // const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    return ( 
        <>
              
            <div className="messageBox--position">
                <div className="abox--position">
                    <Link to="/ComSoon">
                        <Image src={person.profilePic} className="avatar--shape" alt="" roundedCircle/>
                    </Link>
                </div>
                <div className="tbox--position p-2 pl-4">
                    <div className="fName--style">{person.fName} {person.lName}</div>
                    <div className="dName--style">{person.dName}</div>
                    <div className="title--style">{person.title}</div>
                </div>
                <div className="dotbox--position">
                    <Link to="/ComSoon">
                        <ThreeDots />
                    </Link>
                </div>
            </div>


        </>
     );
}
 
export default Person;