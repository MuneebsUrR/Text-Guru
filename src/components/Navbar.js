import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
   <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      
    <div className="custom-control custom-switch ">
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.switchMode}/> {/* Handling mode on switch */}
  <label className={`custom-control-label text-${props.mode==='light'? 'dark' : 'light'}`} for="customSwitch1">Switch dark mode</label>
  </div>

  </div>
</nav>

   </>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title:"My Website Title"
    
}
