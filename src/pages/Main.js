import React, { Fragment, useState } from 'react';
//import React, { Component, useState } from 'react';
import HomePg from '../img/HomePg.png';
import backgroundVideo from '../video_back/background.mp4';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import '../App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import activateWebcam from './CamPage';
import axios from 'axios';

function Main() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onUpload = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    }

    const onSubmit = e => {
      //e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      console.log("FILENAME "+ filename);

      try {
        const res =  axios.post('/upload', formData, {
          headers : {
            'Content-Type': 'multipart/form-data'
          }
        }).then( () => {

          const { filename, filePath} = res.data;
  
          setUploadedFile({filename, filePath});
        });

      } catch (err) {
        if(err.response.status === 500){
          console.log('There was a problem with the server');
        } else {
          console.log('--- ERROR: '+ err.response.data.msg);
        }
      }
    };

    return (
      <div className="App">
        <img className="App-logo" src={HomePg} alt="HomePgPic" />
        <nav>
        <Link to="/TakePhoto/" >
        <h1><Button label="Take photo"  /></h1>
        </Link>
        </nav>
        <h1><FileUpload mode="basic" name={filename} customUpload uploadHandler={onSubmit} maxFileSize={1000000} onUpload={onUpload} /></h1>
  
      </div>
    );
  }
  
  export default withRouter(Main);