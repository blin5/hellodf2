import React, { Component } from 'react';
import HomePg from './img/HomePg.png';
import backgroundVideo from './video_back/background.mp4';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import activateWebcam from './CamPage';

function Main() {
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
        <img className="App-logo" src={HomePg} alt="HomePgPic" />
        <nav>
        <Link to="/TakePhoto/" >
        <h1><Button label="Take photo"  /></h1>
        </Link>
        </nav>
        <h1><FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000}  /></h1>
  
      </div>
    );
  }
  
  
  function onUpload() {
    this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }
  
  export default withRouter(Main);