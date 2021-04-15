import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { createPerson } from '../../actions/persons';
import FileBase from 'react-file-base64';
// import request from 'request';
import $ from 'jquery';
// import { Next } from 'react-bootstrap/esm/PageItem';

const FormReg = () => {
    const [personData, setPersonData] = useState({ 
        cName:'',
        fName:'', 
        lName:'', 
        email:'', 
        pwd:'',
        title:'',
        dName:'',
        profilePic:'',
        faceId:''
     }); 
       
    let id;
    const history = useHistory();
    const dispatch = useDispatch();
    // console.log(personData);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.luxand.cloud/subject/v2",
            "method": "POST",
            "headers": {
                "token": "83cfc4b743a447228c23e1d3b35d745a"
            },
            "data": {"name":personData.email,"store":"1","photo":personData.profilePic.split(",")[1]}
        }
        
        $.ajax(settings).done(function (response) {

            
        });  

        setPersonData({ ...personData, faceId: id})
        dispatch(createPerson(personData, history))
    }
    return ( 
        <>
            <img src="/images/logo.svg" className="pt-5 logo--width" alt="logo" />
            <h3 className="mb-4 mt-2 pt-3">Register</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="formBasiccName">
                    <Form.Label className="formLabel" >Company Name</Form.Label>
                    <Form.Control type="text" name="cName" value={personData.cName} onChange={(e) => setPersonData({ ...personData, cName: e.target.value})} required/>
                </Form.Group>
                
                <Form.Group controlId="formBasicfName">
                    <Form.Label className="formLabel">First Name</Form.Label>
                    <Form.Control type="text" name="fName" value={personData.fName} onChange={(e) => setPersonData({ ...personData, fName: e.target.value})} required/>
                </Form.Group>

                <Form.Group controlId="formBasiclName">
                    <Form.Label className="formLabel">Last Name</Form.Label>
                    <Form.Control type="text" name="lName" value={personData.lName} onChange={(e) => setPersonData({ ...personData, lName: e.target.value})} required/>
                </Form.Group>

                <Form.Group controlId="formDepartment">
                    <Form.Label className="formLabel">Department Name</Form.Label>
                    <Form.Control type="text" name="dName" value={personData.dName} onChange={(e) => setPersonData({ ...personData, dName: e.target.value})} required/>
                </Form.Group>

                <Form.Group controlId="formBasicTitle">
                    <Form.Label className="formLabel">Title</Form.Label>
                    <Form.Control type="text" name="title" value={personData.title} onChange={(e) => setPersonData({ ...personData, title: e.target.value})} required/>
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="formLabel">Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="sample@email.com" value={personData.email} onChange={(e) => setPersonData({ ...personData, email: e.target.value})} required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formLabel">Password</Form.Label>
                    <Form.Control type="password" name="pwd" value={personData.pwd} onChange={(e) => setPersonData({ ...personData, pwd: e.target.value})} required/>
                
                </Form.Group>

                <div className="formImgUpload mt-4">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPersonData({ ...personData, profilePic: base64 })} required/>
                </div>
                
                <Button variant="primary" className="mt-4" size="lg" type="submit">
                    Next
                </Button>

                <Form.Text className="text-muted px-5 mt-2 mb-5">
                    Already on Z-Office? <a href="/Auth">Login</a>
                </Form.Text>

            </Form>
        </>
    );
}
 
export default FormReg;