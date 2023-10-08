import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css'
const Summary = (props) => {
    const [words, setwords] = useState(10000);
    useEffect(() => {
        

   setTimeout(() => {
       setwords(props.text.length);
   }, 300);
   
}, );

function removeSpace(word) {
    return word !== '';
}
return (
        <div >
            <h3 id='heading' className='container my-3 text-center'>Text Summary</h3>

            <div className="d-flex justify-content-center container my-1">

                <div className='mx-4' style={{ width: 120, height: 120 }}>
                    <CircularProgressbar styles={buildStyles({

                        textSize: "14px",
                        textColor:'#526D82',
                        pathColor:'#27374D' ,
                    })} value={words===0 ? props.text.length: words} maxValue={10000} text={`${props.text.length}/10000`} />
                </div>
                <div className="d-flex align-items-center justify-content-center text-white mx-4" style={{ backgroundColor:'#27374D',width: 120, height: 120, borderRadius: '50%' }}>
                    {`Words: ${props.text.split(/\s+/).filter(removeSpace).length}`}
                </div>


            </div>
        </div>
    );
}

export default Summary;
