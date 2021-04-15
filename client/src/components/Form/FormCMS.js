import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { updatePerson,  deletePerson } from '../../actions/persons';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import FileBase from 'react-file-base64';
import * as actionType from '../../constants/actionTypes';
import $ from 'jquery';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './FormCMS.scss';

const FormCMS = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const url = "https://api.luxand.cloud/subject/" + user?.result.faceId;
    const dispatch = useDispatch();
    const [personData, setPersonData] = useState({ 
        cName:user?.result.cName,
        fName:user?.result.fName, 
        lName:user?.result.lName, 
        email:user?.result.email, 
        title:user?.result.title,
        dName:user?.result.dName,
        profilePic:user?.result.profilePic,
        online: user?.result.online,
        faceId: user?.result.faceId
    });

    const history = useHistory();

    const handleSubmit = (e) => {      
        e.preventDefault();
        console.log(personData);
        setPersonData({...personData, online:false});
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "POST",
            "headers": {
                "token": "83cfc4b743a447228c23e1d3b35d745a"
            },
            "data": {"store":"1","photo":personData.profilePic.split(",")[1]}
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            setTimeout(() => {
                dispatch(updatePerson(user?.result._id, personData));
            },500)
            setTimeout(() => {
                dispatchLogout();
            },2000)
        });
    };

    const dispatchLogout = () =>{
        dispatch({ type: actionType.LOGOUT });
        history.push('/');
        setUser(null);
    }

    const handleDelete = ()=>{
        console.log("delete")
        
        console.log(url);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "DELETE",
            "headers": {
                "token": "83cfc4b743a447228c23e1d3b35d745a"
            },
            "data": {}
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            dispatch(deletePerson(user?.result._id));
            dispatch({ type: actionType.LOGOUT });
            history.push('/');
            setUser(null);
        });
    }

    return (
        <div>
        <Header/>
            <div className="fcMbox--position">
                <div className="cmstitle--position">
                    <h1>CMS</h1>
                </div>
                <div className="cmscontent--position">
                    <Form onSubmit={ handleSubmit }>
                    
                    <Form.Group controlId="formBasicfName">
                        <Form.Label className="formLabel">First Name</Form.Label>
                        <Form.Control type="text" name="fName" value={personData.fName} onChange={(e) => setPersonData({ ...personData, fName: e.target.value})}/>
                    </Form.Group>

                    <Form.Group controlId="formBasiclName">
                        <Form.Label className="formLabel">Last Name</Form.Label>
                        <Form.Control type="text" name="lName" value={personData.lName} onChange={(e) => setPersonData({ ...personData, lName: e.target.value})}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label className="formLabel">Title</Form.Label>
                        <Form.Control type="text" name="title" value={personData.title} onChange={(e) => setPersonData({ ...personData, title: e.target.value})}/>
                    </Form.Group>

                    <div className="formImgUpload mt-4">
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPersonData({ ...personData, profilePic: base64 })} required/>
                    </div>

                    <img src = {personData.profilePic}  className="mt-4 photobox--size"/><br/>

                    <Button variant="primary" className="mt-4 mr-5" size="lg" type="submit">
                        Update
                    </Button>

                    <Button variant="primary" className="mt-4" size="lg" onClick={handleDelete} >
                        Delete
                    </Button>

                    </Form>
                </div>
            </div>
        <Navbar/>
        </div>
    )
}

export default FormCMS
