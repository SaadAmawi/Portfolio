import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAws, faGitAlt, faJava, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
function About() {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       },3000)
     }, [])

  
    return (
        <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','B','O','U','T',' ','M','E']}
            idx={15}
            />
        </h1>
        <p>With a dynamic background in software engineering and development, I am a highly adaptable and motivated professional dedicated to pushing the boundaries of technological innovation. My expertise encompasses a diverse skill set, including high proficiency in Java, JS frameworks, Python and its frameworks, ML libraries such as Sci-kit Learn, RDBMS, and AWS.</p>
        <p>Currently, I am contributing my skills as an intern at Masdar, where I am actively engaged in real-world applications of software solutions. Simultaneously, I am pursuing my AWS Solutions Architect certification to further enhance my technical acumen. One of my notable achievements includes collaborating on a highly innovative and complex system for my graduation project in partnership with the esteemed Cleveland Clinic.</p>
        <p>My passion for staying at the forefront of technological advancements, coupled with practical experience and a commitment to excellence, positions me as a valuable asset in driving success in any software engineering role.</p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faJava}  />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faReact}  />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faAws}  />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faUnity}  />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faPython}  />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} />
            </div>
        </div>
      </div>
    </div>
    <Loader type="ball-clip-rotate-multiple"/>
    </>
  )
}

export default About
