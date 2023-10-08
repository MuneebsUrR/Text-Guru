import React from 'react'
import PropTypes from 'prop-types'
import { Link,useLocation } from 'react-router-dom';
import '../App.css'
export default function Navbar(props) {
  const location = useLocation();
  return (
    <nav>
      <div className="p-3 mx-2 d-flex justify-content-around navbar-container">

        <span className="flex-shrink-1 flex-fill brand-name h5">
          <Link className="BrandLink" to='/'>{props.title}</Link>
        </span>
        <span>
          <li><Link className={`link ${location.pathname==='/'?'active':''}`} to='/'>Home</Link></li>
        </span>
        <span className='mx-4'>
          <li><Link className={`link ${location.pathname==='/utility'?'active':''}`} to='/utility'>Utility</Link></li>
        </span>
        <span>
          <li><Link className={`link ${location.pathname==='/contact'?'active':''}`} to='/contact'>Contact</Link></li>
        </span>
      </div>

    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "My Website Title"

}
