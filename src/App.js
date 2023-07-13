
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Form';
import React, { useState } from 'react'


function App() {

  const [mode, setmode] = useState('light');

  function handleModeonClick(){ //function to enable dark mode
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black'; 
    }
    else{
      setmode('light') ;
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
  <>
     <Navbar title="Pretty Texts" mode={mode} switchMode={handleModeonClick}/>
     <Forms heading="Enter Your Text to Analyze" mode={mode}/>
  </>
  );
}

export default App;
