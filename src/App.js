
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Form';
import Alerts from './components/Alerts';
import Contact from './components/Contact';
 import React, { useState } from 'react'
 import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState({});

  const showAlert = (type, msg)=>{

    setalert({
      alertType:type,
      message:msg,
      iconTag : <i class="fa fa-check-circle-o mx-2" aria-hidden="true"></i>,
   
    })

    setTimeout(()=>{
      setalert({});
    },1000 )
  }

  function handleModeonClick(){ //function to enable dark mode
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black'; 
      showAlert('success','Dark mode enabled successfully');
    }
    else{
      setmode('light') ;
      document.body.style.backgroundColor='white';
      showAlert('success','Light mode enabled successfully');
    }

   
  }
  
  return (
  <>

     <Navbar title="Text Helper" mode={mode} switchMode={handleModeonClick}/>
     <Alerts alert={alert}/>
     
         
        

       
        <Routes>
          <Route exact path="/" element={  <Forms heading="Enter Your Text to Analyze" mode={mode} alert = {showAlert} /> } />
         
          <Route exact path="/Contact" element = {  <Contact mode={mode}/>}/>
         
        </Routes>

    
     
  </>
  );
}

export default App;
