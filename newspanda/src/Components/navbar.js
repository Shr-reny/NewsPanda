import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

const NavBar=(props)=> {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-dark " data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsPanda</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/entertaintment">Entertainment</Link></li>
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/general">General</Link></li> */}
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
        </ul> 
        <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={()=>{props.toggle(null)}}
              role="switch"
              id="flexSwitchCheckChecked"
              // checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label></div>    
    </div>
  </div>
</nav>
      </div>
    )
}

export default NavBar
