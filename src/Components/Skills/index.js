import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import TextSphere from './TextSphere/TextSphere'
import a1 from './MemorEyez.png'
import a2 from './uhealth.png'
import a3 from './uhealth2.png'
import a5 from './uhealth3.png'
import a6 from './uhealth4.png'
import a4 from './memvr.png'
import './index.scss'
import './index.scss'
import { Link } from 'react-router-dom'



function Skills() {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       },5000)
     }, [])
     
  return (
    <>
    <div className='container skills-page' >
    <div className='text-zone'>
    <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['P','R','O','J','E','C','T','S',' ', '&',' ','S','K','I','L','L','S',]}
            idx={15}
            />
        </h1>
      
        <div className='MemorEyez'>
            <h2>MemorEyez</h2>
            <p className='para'>A Smart Secure Virtual Reality
               Immersive Application for Alzheimer’s and
               Dementia Patients
            </p>
        <Link to='http://memor-eyez-webapp.s3-website.me-central-1.amazonaws.com/' className='link1' target='_blank'> 
        <div className='move'>
        <img src={a4} className="apps" width={300} alt='app'></img>
        <img src={a1} className="website" width={300} alt='website'></img>
        </div>
        </Link>
        </div>
        <div className='Uhealth'>
        <h2>Uhealth</h2>
            <p>A Health and wellness Android Application including a BMI calculator
                and Diet Recommender.
            </p>
            
        <Link to='https://github.com/SaadAmawi/UHealth-Android-App' className='link1' target='_blank'> 
        <div className='imgs'>
        <img src={a2} className="uhealth1" height={200} alt="Uhealth1"></img>
        <img src={a3} className="uhealth2" height={200} alt="uhealth2"></img>
        <img src={a6} className="uhealth3" height={200} alt="uhealth4"></img>
        <img src={a5} className="uhealth4" height={200} alt="uhealth3"></img>
        </div>
        </Link>
        
        </div>
    </div>
    <div className='sphere'>
     <TextSphere/>
     </div>
    </div>
    <Loader type="ball-clip-rotate-multiple"/>

    </>
  )
}

export default Skills
