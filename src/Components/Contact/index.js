import './index.scss'
import Loader from 'react-loaders'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import {
  faPhone,
  faEnvelope,
  faLocation
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {

    const form = useRef();
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       },6000)
     }, [])
     
     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xfxr88t', 'template_p1fatx8', form.current, 'upnTvh5Krzt5CRnIB')
        .then(
          () => {
            alert("Email sent successfully!");
            window.location.reload(false);
        }, 
        () => {
            alert("Message not sent, please try again.");
        });
    };
  return (
    <>
      <div className='container contact-page'>
        
        <div className='all-zone'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C','O','N','T','A','C','T',' ','M','E']}
                idx={15}/>
            </h1>
            <div className='contact-form'>
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className='half'>
                    <input type='text' name='from_name' placeholder='Name' required/>
                  </li>
                  <li className='half'>
                    <input type='email' name='from_email' placeholder='Your Email' required/>
                  </li>
                  <li className='half'>
                    <input  placeholder='Subject' type='text' name='subject'/>
                  </li>
                  <li className='half'>
                  <textarea  placeholder='Message' name='message' required/>
                  </li>
                  <li>
                    <input type="submit" className='flat-button' value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
            </div>
       
        </div>
        <div className='my-info'>
            <ul className='listss'>
              <li className='num' ><FontAwesomeIcon icon={faPhone}  /> &nbsp; +971 56 455 0990</li>
              <li className='email'><FontAwesomeIcon icon={faEnvelope}  /> &nbsp; saadamawi22@gmail.com</li>
              <li className='location'><FontAwesomeIcon icon={faLocation}  /> &nbsp; United Arab Emirates, Abu Dhabi</li>
            </ul>


  </div>
      </div>

      <Loader type="ball-clip-rotate-multiple"/>

    </>
  )
}

export default Contact
