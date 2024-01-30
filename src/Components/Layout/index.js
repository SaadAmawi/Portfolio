import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './index.scss'
// import Home from '../Home'
// import pdf from './Saad Amawi Resume.pdf'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faFile,
//   faUpRightFromSquare,
// } from '@fortawesome/free-solid-svg-icons'


function Layout (){
  return (
    <div className="App">
    <Sidebar />
    <div className="page">
      <span className="tags top-tags">&lt;body&gt;</span>
      {/* <Link to={pdf} className='resume-button' target='_blank'> <FontAwesomeIcon className='lol' icon={faFile} />
        <h3 className='on-hover'>
           <FontAwesomeIcon icon={faUpRightFromSquare}  />&nbsp; 
           Resume</h3></Link> */}
      <Outlet />
      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  </div>
  
  )
}

export default Layout
