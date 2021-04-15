import React, { useRef, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import { updatePerson } from '../../actions/persons';
import $ from 'jquery';
import  './Header.scss';

function Header() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
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
    // console.log(personData);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const persons = useSelector((state) => state.persons);
    // console.log(persons);
    // let faceId;

    //updating faceId to API record in case registration stage didn't pass data
    useEffect (()=> {  var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.luxand.cloud/subject",
        "method": "GET",
        "headers": {
            "token": "83cfc4b743a447228c23e1d3b35d745a"
        },
        "data": {}
    }
    
    $.ajax(settings).done(function (response) {
        for(let i=0;i<response.length;i++){
            if(response[i].name==user?.result.email){
                // console.log(response[i].id)
                const faceId=response[i].id;
                setPersonData({...personData, faceId:faceId, online:true})
        }}
    });
    }, [])


    useEffect(() => {
        setTimeout(()=>{
            dispatch(updatePerson(user?.result._id, personData));
        }, 500)
    }, [personData])

    //end updating faceId once

    //logout 
    const logout = () => {
        // console.log(personData)
        setPersonData({...personData, online:false});
        setTimeout(() => {
            dispatchLogout();
        },2000)
    };  

    const dispatchLogout = () =>{
        dispatch({ type: actionType.LOGOUT });
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));

      }, [location]);
    //end of logout codes

     //------------cam-------------------------------------------------
     const videoRef = useRef(null);
     const photoRef = useRef(null);
     const stripRef = useRef(null);
     const time = 5*60*1000; //the first figure is minute, tested
     useEffect(() => {
         setInterval(() => {
             getVideo();
         }, time);
     }, [videoRef]);
 
     
     const getVideo = () => {
         navigator.mediaDevices
           .getUserMedia({ video: { width: 320 } })
           .then(stream => {
             let video = videoRef.current;
             video.srcObject = stream;
             video.play();
             paintToCanvas();
             setTimeout(() => {
                 takePhoto();
                 let tracks = video.srcObject.getTracks();
                 tracks.forEach(function(track) {
                     track.stop();
                 });
                 video.srcObject = null;
             }, 2000);
           })
           .catch(err => {
             console.error("error:", err);
           });
       };
 
     const paintToCanvas = () => {
     let video = videoRef.current;
     let photo = photoRef.current;
     let ctx = photo.getContext("2d"); // drawing on Canvas
 
     const width = 320;
     const height = 240;
     photo.width = width;
     photo.height = height;
 
     ctx.drawImage(video, 0, 0, width, height);
 
     // return setInterval(() => {
     //     ctx.drawImage(video, 0, 0, width, height);
     // }, 3000);
     };
 
     const takePhoto = () => {
         let photo = photoRef.current;
         let strip = stripRef.current;
 
         // console.warn(strip);
 
             const data = photo.toDataURL("image/jpeg");
             var url = "https://api.luxand.cloud/photo/verify/"+ user?.result.faceId;
             //face verification starts
             var settings = {
                 "async": true,
                 "crossDomain": true,
                 "url": url,
                 "method": "POST",
                 "headers": {
                     "token": "83cfc4b743a447228c23e1d3b35d745a"
                 },
                 "data": {"photo": data.split(",")[1]}
             }
             
             $.ajax(settings).done(function (response) {
                 console.log(response);
                 if (response.status=="success") {
                     setPersonData({ ...personData, online: true});
                 } else {
                     setPersonData({ ...personData, online: false});
                 }
                 
             });
 
            //face verification ends
    };
    //end of cam
        
    const show = false;


    return (
        <div className="header--holder">
            <div className="header--container">
                <div className="avatar">
                    <Link to="/CMS">
                        <Image src={user?.result.profilePic} className="avatar--shape" alt="avatar" roundedCircle />
                    </ Link>
                </div>
                <div className="nameAndState">
                    <div className="fName">{user?.result.fName} {user?.result.lName}</div>
                    <div className="dName">{user?.result.dName}</div>
                    <div className="title">{user?.result.title}</div>
                </div>
                {/* <div className="searchBar">
                    <Search  color="#213B4F" size={25}/>
                </div> */}
                <div className="btn--logout">
                    <Button variant="outline-info" color="secondary" onClick={logout}>Logout</Button>
                </div>
            </div>

        <div className="webRTC">
                <video id="video-cam" className="videoStream mb-5" onCanPlay={() => paintToCanvas()} ref={videoRef} />
                <canvas id="canvas-cam" className="videoCanvas mb-5" ref={photoRef} />
                {/* <p>
                    <button type="button" className="captureBtn p-2" onClick={() => takePhoto()}>Take a photo</button>
                </p> */}
            <div ref={stripRef} />
        </div>


        </div>
    )
}

export default Header
