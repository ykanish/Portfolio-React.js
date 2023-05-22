import './style.scss'
import React from 'react'
import cloudSoft from "../../images/cloud-soft.png"
import cloud from "../../images/cloud.png"
import Navbar from './navbar/Navbar'
import IntroContent from './introContent/IntroContent'

function Intro() {
  return (
    <div className='Intro-section'>
      <div className="vector-bg" id='parallax'>

      </div>
      <img src={cloud} alt="cloud" className='cloud'/>
      <img src={cloudSoft} alt="cloud-soft" className='cloud-soft'/>
      <div className="content">
        <Navbar/>
        <IntroContent/>
      </div>
    </div>
  )
}

export default Intro;





