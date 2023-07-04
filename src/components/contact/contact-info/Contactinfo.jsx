import React from 'react'
import './style.scss'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Contactinfo() {
  return (
    <div className='contact-info-box'>
      <h4>Contact Information</h4>
      <p className='infotext'>
        Thank you for your valuable time, 
        Looking forward for a positive response. 
      </p>

      <div className="contact-option">
        
        
        <span className='text'><FaPhoneAlt/>&nbsp; +91 8467853553</span>
        
        
        
        
        <span className='text'><MdEmail/> &nbsp; yadavkanishk57@gmail.com</span>
        
        

      </div>
    </div>
  )
}

export default Contactinfo
