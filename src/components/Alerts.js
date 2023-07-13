

import React from 'react'
import 'P:\\React Course\\demo-app\\src\\App.css'


export default function Alerts(props) {
    
    
  return (
    <>
   
  
 <div id='alertbox' className={`alert alert-${props.alert.alertType} d-flex align-items-center`}   role="alert">
  <div>
     {props.alert.iconTag} {props.alert.message}
  </div>
</div>

    
    </>
  )
 
}
