import React from 'react'
import "./style.scss"
import CalltoAction from '../../shared/CalltoAction/CalltoAction'
import {scrollToSection} from "../../utils/helper"
import {CgMenuRight} from "react-icons/cg"
import {IoMdClose} from "react-icons/io" 
import { useState } from 'react'
function Navbar() {
  const[mobileMenu,setMobileMenu] = useState(false)

  const menuItemsClickHandler = (section)=>{
    setMobileMenu(!mobileMenu)
    scrollToSection(section)
  }
  return (
    <div className='top-navigationbar'>
      <div className="app-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/1810/1810663.png" alt="app logo" />
      </div>

      <div className="mobile-menu" onClick={()=>setMobileMenu(!mobileMenu)}>
        {mobileMenu?(<IoMdClose size={24} color="#fff"/>):(<CgMenuRight size={24} color="#fff"/>)}
      </div>

      <div className={`navigation ${mobileMenu?"active":""}`}>
        <span className="navigation-items" onClick={()=>{menuItemsClickHandler("skills")}}>Skills</span>
        <span className="navigation-items" onClick={()=>{menuItemsClickHandler("portfolio")}}>Projects</span>
        <span className="navigation-items blog" onClick={()=>{menuItemsClickHandler("intrest")}}>Intrests</span>
        <CalltoAction text = "Contact Me" className="action" action={()=>{menuItemsClickHandler("section")}}/>
      </div>
    </div>
  )
}

export default Navbar

