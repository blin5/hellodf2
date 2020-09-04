import React, { Component } from 'react';
import HomePg from './img/HomePg.png';
import backgroundVideo from './video_back/background.mp4';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Webcam from "react-webcam";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App.js';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
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
        <h1><Button label="Capture photo" onClick={capture}/>
        <Link to="/" >
        <Button label="Back" />
        </Link>
        </h1>
        <h1>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
        </h1>
        <h1>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
        </h1>
        
      </>
    );
  };


function activateWebcam() {
    return (
      <div className="App">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
          >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <img className="App-logo-little" src={HomePg} alt="HomePgPic" />
  
        <h1><WebcamCapture  /></h1>
  
      </div>
    );
  }

  export default activateWebcam;