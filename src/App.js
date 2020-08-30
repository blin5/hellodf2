import React, { Component } from 'react';
import tonyImage from './img/tonyPic.jpg';
import backgroundVideo from './video_back/background.mp4';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Webcam from "react-webcam";

//const WebcamComponent = () => <Webcam />;
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
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored="false"
      />
      <Button label="Capture photo" onClick={capture}/>
      <h1><FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000}  /></h1>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
      
    </>
  );
};

function App() {
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
      <img src={tonyImage} alt="tony-effe" />

      <h1><WebcamCapture /></h1>

      <div className="Card">
      
      </div>
    </div>
  );
}

function onUpload() {
  this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}

export default App;
