import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
   <>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

  <Link className="navbar-brand" to="/">{props.title} 
  <img src="favicon-16x16.png" alt="brand icon" className='mx-2' />
  </Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>

<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Contact">Contact Us</Link>
  </li>
</ul>


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
