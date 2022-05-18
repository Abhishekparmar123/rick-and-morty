import React from 'react'
import logo from "../assets/logo.png";
import { Link } from 'gatsby';

function Navbar() {
  return (
    <nav className="navbar has-background-black is-justify-content-space-between">
        <div className="navbar-brand ">
          <Link to='/' className="navbar-item">
            <img src={logo} alt="logo" width="112" height="28" />
          </Link> 
        </div>
        <div className='navbar-item'>
            <span className='is-size-4 has-text-white'>Project Work</span>
        </div>
    </nav>
  )
}

export default Navbar