import React, { useState } from 'react';
import Summary from './Summary';

const Utility = (props) => {
    const [text, setText] = useState('');

    function toUpper() {
      setText(text.toUpperCase());
  
      if (text !== '')
        props.alert('success', 'text converted to upper case successfully');
      else alert('First enter some text!')
    }
  
    function toLower() {
      setText(text.toLowerCase());
      if (text !== '')
        props.alert('success', 'text converted to lower case successfully');
      else alert('First enter some text!')
    }
  
    function clear() {
      setText("");
  
      if (text !== '')
        props.alert('success', 'text clear successfully');
      else alert('First enter some text!')
    }
  
    function speech() {
      let speakData = new SpeechSynthesisUtterance();
      let voice = speechSynthesis.getVoices();
      speakData.volume = 1; // From 0 to 1
      speakData.rate = 0.8; // From 0.1 to 10
      speakData.pitch = 2; // From 0 to 2
      speakData.text = text;
      speakData.lang = 'en';
      speakData.voice = voice[0];
      speechSynthesis.speak(speakData);
  
      if (text !== '')
        props.alert('success', 'Speach to text allow successfully');
      else alert('First enter some text!')
    }
  
    function copyText() {
      let val = document.getElementById('textarea');
      val.select();
      navigator.clipboard.writeText(val.value);
  
      if (text !== '')
        props.alert('success', 'text copied successfully');
      else alert('First enter some text!')
    }
  
    function removeExtraSpaces() {
      let regexPattern = /\s+/g;
      setText(
        text.replace(regexPattern, " ")
      )
  
      if (text !== '')
        props.alert('success', 'Spaces removed successfully');
      else alert('First enter some text!')
  
    }
  
    const setonChange = (event) => {
      setText(event.target.value);
    }
  
    
  
    return (
        <div className='home container my-4'>
        <h2 id='heading' className='my-2' >{props.heading}</h2>
        <div className="form-group ">

          <textarea className="form-control" value={text} onChange={setonChange} rows={8} defaultValue={""} placeholder='Enter your text here!' id='textarea' />

        </div>
        <div className='text-center'>

          <button className="btn btn-primary m-2" onClick={toUpper}>Convert To UpperCase</button>
          <button className="btn btn-info m-2" onClick={toLower}>Convert To LowerCase</button>
          <button className="btn btn-success m-2" onClick={speech}>Text To Speech</button>
          <button className='btn btn-warning m-2' onClick={copyText}>Copy Text</button>
          <button className='btn btn-secondary m-2' onClick={removeExtraSpaces}>Remove extra spaces</button>
          <button className='btn btn-danger m-2' onClick={clear}>Clear</button>
         

        </div>
        <Summary text = {text}/>
      </div>
    );
}

export default Utility;
