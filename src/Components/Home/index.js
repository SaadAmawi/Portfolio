import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import './index.scss'
import Logo from './Logo'
import pdf from './Saad Amawi Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faFile,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import AnimatedLetters from '../AnimatedLetters'

function Home() {
  const [letterClass, setLetterClass]=useState('text-animate')
  const nameArray = ['Saad',' ','Amawi']
  const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']

  useEffect(() => {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')
    },6000)
  }, [])

  return (
    <>
    <div className='container home-page'>
    <div className='text-zone'>
      <h1>
    
        <span className={`${letterClass} _11`} >H</span>
        <span className={`${letterClass} _12`} >e</span>
        <span className={`${letterClass} _13`} >l</span>
        <span className={`${letterClass} _14`} >l</span>
        <span className={`${letterClass} _15`} >o </span>
        <span className={`${letterClass} _16`} >, </span>
        <br/> 
        <span className={`${letterClass} _17`} >I </span>
        <span className={`${letterClass} _18`} >' </span>
        <span className={`${letterClass} _19`} >m </span>
        <span className={`${letterClass} _20`} >  </span>
      {/* <img src={Logos} alt="s"/> */}
      <AnimatedLetters letterClass={letterClass}
      strArray={nameArray}
      idx={21}/>
      <br/>
      <AnimatedLetters letterClass={letterClass}
      strArray={jobArray}
      idx={31}/>
      
     
      </h1>
      <h2>Frontend Enthusiast | Cloud Practitioner | VR Developer</h2>
      <Link to="/contact" className='flat-button'>Contact Me!</Link>
      <Link to={pdf} className='resume-button' target='_blank'> <FontAwesomeIcon className='lol' icon={faFile} />
        <h3 className='on-hover'>
           <FontAwesomeIcon icon={faUpRightFromSquare}  />&nbsp; 
           Resume</h3></Link>
    </div>
    <Logo />
    </div>
    <Loader type="ball-clip-rotate-multiple"/>
    </>
  )
}

export default Home
