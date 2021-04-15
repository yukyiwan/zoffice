import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../actions/persons';
import $ from 'jquery';

import { Form, Button} from 'react-bootstrap';

const FormAuthFace = () => {

    const history = useHistory();

    const [personData, setPersonData] = useState({ 
        email:'', faceId:''
    });

    const dispatch = useDispatch();
    
    const handleSubmitFace = () => {
        stopVideo();
        setTimeout(() => {
            dispatch(signIn(personData, history));
        },500)
    }


    //------------cam-------------------------------------------------
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
          .getUserMedia({ video: { width: 320 } })
          .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          })
          .catch(err => {
            console.error("error:", err);
          });
    };

    const stopVideo = () => {
        // navigator.mediaDevices
        //   .getUserMedia({ video: { width: 320 } })
        //   .then(stream => {
        let video = videoRef.current;
        // video.srcObject = stream;
        let tracks = video.srcObject.getTracks();
            tracks.forEach(function(track) {
                track.stop();
        })
        video.srcObject = null;
        const canvas = document.getElementById('loginCanvas');
        canvas.remove();
    //     })
    // .catch(err => {
    //     console.error("error:", err);
    //     });
    }

    const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d"); // drawing on Canvas

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 2000);
    };

    let photo;
    let strip;
    let data;
    
    const takePhoto = () => {
        
        if (!photo) {
         photo = photoRef.current;
         strip = stripRef.current;

            // console.warn(strip);

        data = photo.toDataURL("image/jpeg");}
            
        
    //face recognition starts here
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.luxand.cloud/photo/search",
        "method": "POST",
        "headers": {
            "token": "83cfc4b743a447228c23e1d3b35d745a"
        },
        "data": {"photo": data.split(",")[1]}
    }
    
    $.ajax(settings).done(function (response) {
        setPersonData({...personData, email:response[0].name, faceId:response[0].id})
        if (personData.faceId) handleSubmitFace();     
       
    });

    //face verification ends

    
    };


    return (
        <>
            <img src="/images/logo.svg" className="pt-5 logo--width" alt="logo" />
            <h3 className="mt-2 pt-3">Log In</h3>

            <div className="webRTC">
                    <video className="videoStream mb-5" onCanPlay={() => paintToCanvas()} ref={videoRef} />
                    <canvas id="loginCanvas" className="video--placeholder videoCanvas mb-2" ref={photoRef} /><br/>
                        <Button variant="primary" size="lg" className="captureBtn p-3 mb-2 mt-3" onClick={() => takePhoto()}>Facial recognition</Button>
                    {/* <p>
                        <Button variant="secondary" size="lg" className="captureBtn p-3" onClick={stopVideo}>OFF</Button>
                    </p> */}
                <div>
                    <div ref={stripRef} />
                </div>
            </div>

            <Form.Text className="text-muted">
                    Not yet on Z-Office? <a href="/Register">Register</a>
                </Form.Text>

            <Form.Text className="text-muted px-5 mt-3 mb-5">
                Login through password? <a href="/Auth">Password login</a>
            </Form.Text>

        </>
    )
}

export default FormAuthFace;