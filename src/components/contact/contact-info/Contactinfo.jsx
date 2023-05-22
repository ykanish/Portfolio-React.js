import React from 'react'
import './style.scss'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Contactinfo() {
  return (
    <div className='contact-info-box'>
      <h4>Contact Information</h4>
      <p className='infotext'>
        Thank you for visiting our website,
        We look forward To Hearing from you 
      </p>

      <div className="contact-option">
        
        
        <span className='text'><FaPhoneAlt/>&nbsp; +91 9580774044</span>
        
        
        
        
        <span className='text'><MdEmail/> &nbsp; vijitkumar699@gmail.com</span>
        
        

      </div>
    </div>
  )
}

export default Contactinfo
