import React from 'react'
import {Link} from "react-router-dom"
import "../Style/Navbar.css"


const Navbar = () => {
  return (
    <div>
       <nav className='navbar  navbar-expand-sm' id="navbar-bg">
        <div className="container">
            <Link to="/" className='navbar-brand  fw-bold'>LOGO</Link>

            <button className='navbar-toggler text-light' type="button"  data-bs-target="#nav-collapse" data-bs-toggle="collapse">
                <span className='navbar-toggler-icon  bg-light'></span>
            </button>

            <div className='collapse navbar-collapse justify-content-center' id="nav-collapse">
                <ul className='navbar-nav'>
                   <li className='nav-item'><Link to="/" className='nav-link  'id="menu-item">Home</Link></li>
                   <li className='nav-item'><Link to="/about" className='nav-link 'id="menu-item">About</Link></li>
                   <li className='nav-item'><Link to="/service" className='nav-link 'id="menu-item">Service</Link></li>
                   <li className='nav-item'><Link to="/skills" className='nav-link 'id="menu-item">Skills</Link></li>
                   
                   <li className='nav-item'><Link to="/project" className='nav-link 'id="menu-item">Projects</Link></li>
                   <li className='nav-item'><Link to="/contact" className='nav-link 'id="menu-item">Contact us</Link></li>
                </ul>
            </div>
        </div>
       </nav>

       
    </div>
  )
}

export default Navbar
