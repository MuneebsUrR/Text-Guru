import React, {useState} from 'react'


export default function Form(prop) {
    const [text,setText] = useState('');

    function toUpper(){
        setText(text.toUpperCase());
    }

    function toLower(){
        setText(text.toLowerCase());
    }

    function clear(){
        setText("");
    }

    function speech(){
        let speakData = new SpeechSynthesisUtterance();
        let voice = speechSynthesis.getVoices();
        speakData.volume = 1; // From 0 to 1
        speakData.rate = 0.8; // From 0.1 to 10
        speakData.pitch = 2; // From 0 to 2
        speakData.text = text;
        speakData.lang = 'en';
        speakData.voice= voice[0];
        speechSynthesis.speak(speakData);
    }

    function copyText(){
      let val = document.getElementById('textarea');
      val.select();
      navigator.clipboard.writeText(val.value);
      alert('Text copied successfully');
    }

    const setonChange = (event)=>{
        setText(event.target.value);
    }
    

  return (
    <>
    <div className='container my-4'>
        <h1 className='my-2'>{prop.heading}</h1>
     <div className="form-group ">
     
       <textarea className="form-control" value={text} onChange={setonChange} rows={8} defaultValue={""} placeholder='Enter your text here!' id='textarea'/>
       
    </div>
    <div className='text-center'>

    <button className="btn btn-primary m-2" onClick={toUpper}>Convert To UpperCase</button>
    <button className="btn btn-info m-2" onClick={toLower}>Convert To LowerCase</button>
    <button className="btn btn-success m-2" onClick={speech}>Text To Speech</button>
    <button className='btn btn-warning m-2' onClick={copyText}>Copy Text</button>
    <button className='btn btn-danger m-2' onClick={clear}>Clear</button>
    </div>
    </div>

    <div className="container my-1">
        <h2>Text Summary</h2>
       <p className='text-primary'>Total Words: { text.split(' ').length}</p>
       <p className='text-danger'>Total Characters: {text.length}</p>
    </div>
    </>
  )
}
