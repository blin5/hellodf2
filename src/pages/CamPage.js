import React, { Component } from 'react';
import HomePg from '../img/HomePg.png';
import backgroundVideo from '../video_back/background.mp4';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Webcam from "react-webcam";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import App from '../App.js';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

var captured = Boolean ;
captured = false;

const WebcamCapture = () => {
    
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      captured = true;
    }, [webcamRef, setImgSrc]); //redirect to ShowImage component
    
    if(captured){
      captured = false;
      return(
      <>
      <div
      className="App-photo">
        {imgSrc && (
            <img
              src={imgSrc}
            />
          )}
      </div>
      <Button label="Submit" />
      <Link to="/TakePhoto/" >
      <Button label="Take again"/>
      </Link>
      </>
      );
    }

    return (
      <>
        <Webcam 
          className="App-photo"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored="false"
        />
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
        <h1>
          <Button label="Capture photo" onClick={capture}/>
          <Link to="/" >
            <Button label="Back home" />
          </Link>
        </h1>
      </>
    );
  };


function activateWebcam() {
    return (
      <div className="App">
        <img className="App-logo-little" src={HomePg} alt="HomePgPic" />
  
        <h1><WebcamCapture  /></h1>
  
      </div>
    );
  }

  export default activateWebcam;