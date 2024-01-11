import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "./logo-s.png"
import name from "./0000.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faEnvelope,
    faSuitcase,
    faFile,
  } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
  return (

<div className='nav-bar'>
<Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={name} alt="myName" />

      </Link>

<nav className='navigator'>
    <div className='nav-items'>
    <NavLink exact="true" activeclassname="active" to="/">
    <FontAwesomeIcon icon={faHome} color="#001283" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
    <FontAwesomeIcon icon={faFile} color="#001283" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
    <FontAwesomeIcon icon={faSuitcase} color="#001283" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
    <FontAwesomeIcon icon={faEnvelope} color="#001283" />
    </NavLink>
    </div>
</nav>
<ul>
    <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/saad-amawi-854bb626a/' className='linked'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4de"/>
        </a>
        <a target="_blank" rel='noreferrer' href='https://github.com/SaadAmawi' className='git'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4de"/>
        </a>
        <a target="_blank" rel='noreferrer' href='https://www.instagram.com/saad.a_a2/' className='insta'>
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4de"/>
        </a>
    </li>
</ul>


</div>
   
     
    
  )
}

export default Sidebar
