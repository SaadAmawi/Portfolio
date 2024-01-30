import './index.css'
import Loader from 'react-loaders'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

function Contact() {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       },3000)
     }, [])
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C','O','N','T','A','C','T',' ','M','E']}
                idx={15}/>
            </h1>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple"/>

    </>
  )
}

export default Contact
