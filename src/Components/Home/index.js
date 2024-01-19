import React from 'react'
import './index.scss'
import pic from "./lol.png";


function Home() {
  return (
    <div className='home'>

    <div className='Name'>
   Saad Amawi, <br/>Software Engineer
   
    </div>

    <div className='NameRight'>
    <img className="img" src={pic}/>
    </div>

    </div>
    
  )
}

export default Home
