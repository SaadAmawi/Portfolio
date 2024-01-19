import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "./logo-s.png"
import name from "./0000.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState } from 'react'
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
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const [button, showbutton]=useState(false);

  return (


<div className='nav-bar'>
<Link className="logo" to="/" onClick={()=>showbutton(false)}>
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={name} alt="myName" />

      </Link>

<nav className={button ? 'mobile-button':''}>
  
    <NavLink exact="true" activeclassname="active" to="/" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faHome} color="#001283" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faFile} color="#001283" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faSuitcase} color="#001283" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>showbutton(false)}>
    <FontAwesomeIcon icon={faEnvelope} color="#001283" />
    </NavLink>
    <FontAwesomeIcon 
          onClick={() => showbutton(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
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

<FontAwesomeIcon 
          onClick={() => showbutton(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
</div>
   
     
    
  )
}

export default Sidebar
