import React, { useEffect, useState } from 'react'
import './index.scss'
import Logo from "../../Components/Sidebar/logo-s.png"
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

function Home() {
  const [letterClass, setLetterClass]=useState('text-animate')
  const nameArray = ['a','a','d',' ','A','m','a','w','i']
  const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']

  useEffect(() => {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')
    },6000)
  }, [])

  return (
    <div className='container home-page'>
    <div className='text-zone'>
      <h1>
    
        <span className={`${letterClass} _11`} >H</span>
        <span className={`${letterClass} _12`} >e</span>
        <span className={`${letterClass} _13`} >l</span>
        <span className={`${letterClass} _14`} >l</span>
        <span className={`${letterClass} _15`} >o, </span>
        <br/> 
        <span className={`${letterClass} _16`} >I </span>
        <span className={`${letterClass} _17`} >'m </span>
      <img src={Logo} alt="s"/>
      <AnimatedLetters letterClass={letterClass}
      strArray={nameArray}
      idx={18}/>
      <br/>
      <AnimatedLetters letterClass={letterClass}
      strArray={jobArray}
      idx={28}/>
      
     
      </h1>
      <h2>Frontend Enthusiast | Cloud Practitioner | VR Developer</h2>
      <Link to="/contact" className='flat-button'>Contact Me!</Link>

    </div>
    </div>
    
  )
}

export default Home
