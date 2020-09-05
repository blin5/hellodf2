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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from '../App.js';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function showPhoto() {
    return (
      <div className="App">
        
        <img className="App-logo-little" src={HomePg} alt="HomePgPic" />
  
  
      </div>
    );
  }

  export default showPhoto;