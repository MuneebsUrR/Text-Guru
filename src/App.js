
import './App.css';
import Navbar from './components/Navbar';

import Alerts from './components/Alerts';
import Contact from './components/Contact';
import React, { useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import Utility from './components/Utility';
import Home from './components/Home';



function App() {

  const [alert, setalert] = useState({});

  const apiKey = process.env.REACT_APP_PARAPHRASING_API_KEY;


  const showAlert = (type, msg) => {

    setalert({
      alertType: type,
      message: msg,
      iconTag: <i className="fa fa-check-circle-o mx-2" aria-hidden="true"></i>,
    })

    setTimeout(() => {
      setalert({});
    }, 1500)
  }

  return (
    <>

      <Navbar title="Text Guru" />
      <Alerts alert={alert} />


      <Routes>
        <Route exact path="/" element={<Home apiKey={apiKey} alert={showAlert} />} />
        <Route exact path="/contact" element={<Contact alert={showAlert} />} />
        <Route exact path="/utility" element={<Utility alert={showAlert} />} />
      </Routes>

    </>
  );
}

export default App;
