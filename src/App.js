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
import activateWebcam from './pages/CamPage.js';
import main from './pages/Main.js';
import showphoto from './pages/ShowPhoto.js';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={main} />
      <Route path="/hellodf2/" component={main} />
      <Route path="/TakePhoto/" component={activateWebcam} />
      <Route path="/ShowPhoto/" component={showphoto} />
      </Switch>
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

    </div>
    </Router>
  );
}

export default App;
