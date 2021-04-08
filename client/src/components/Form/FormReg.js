import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { createPerson } from '../../actions/persons';
import FileBase from 'react-file-base64';

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
        // seatNum:'',
        // online:''
     });

    const history = useHistory();
    const dispatch = useDispatch();
    // console.log(personData);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPerson(personData,history));
        window.location.replace("/PostLogin");
    }

    return ( 
        <div>
            <h2>Register</h2>
            <Form className="m-5" onSubmit={ handleSubmit }>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check className="my-5" type="checkbox" label="existing company" value={ postData.creator } />
                </Form.Group> */}

                <Form.Group controlId="formBasiccName">
                    <Form.Label className="formLabel" >Company Name</Form.Label>
                    <Form.Control type="text" name="cName" value={personData.cName} onChange={(e) => setPersonData({ ...personData, cName: e.target.value})} />
                </Form.Group>
                
                <Form.Group controlId="formBasicfName">
                    <Form.Label className="formLabel">First Name</Form.Label>
                    <Form.Control type="text" name="fName" value={personData.fName} onChange={(e) => setPersonData({ ...personData, fName: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasiclName">
                    <Form.Label className="formLabel">Last Name</Form.Label>
                    <Form.Control type="text" name="lName" value={personData.lName} onChange={(e) => setPersonData({ ...personData, lName: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicTitle">
                    <Form.Label className="formLabel">Title</Form.Label>
                    <Form.Control type="text" name="title" value={personData.title} onChange={(e) => setPersonData({ ...personData, title: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formDepartment">
                    <Form.Label className="formLabel">Department Name</Form.Label>
                    <Form.Control type="text" name="dName" value={personData.dName} onChange={(e) => setPersonData({ ...personData, dName: e.target.value})} />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="formLabel">Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="sample@email.com" value={personData.email} onChange={(e) => setPersonData({ ...personData, email: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formLabel">Password</Form.Label>
                    <Form.Control type="password" name="pwd" value={personData.pwd} onChange={(e) => setPersonData({ ...personData, pwd: e.target.value})}/>
                
                    <Form.Text className="text-muted">
                    Already on Z-Office yet? <a href="/Auth">Login</a>
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group controlId="formSeatNum">
                    <Form.Control type="hidden" name="seatNum" value={personData.seatNum} onChange={(e) => setPersonData({ ...personData, seatNum: e.target.value})}/>
                </Form.Group> */}

                {/* <Form.Group controlId="formOnline">
                    <Form.Control type="hidden" name="online" value={personData.online} onChange={(e) => setPersonData({ ...personData, online: e.target.value})}/>
                </Form.Group> */}

                <div className="formImgUpload">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPersonData({ ...personData, profilePic: base64 })} />
                </div>
                
                <Button className="px-5 mt-5" variant="primary" size="lg" type="submit">
                    Next
                </Button>
            </Form>
        </div>
    );
}
 
export default FormReg;