import React from 'react'
import './style.scss'
import Section from '../shared/section/Section'
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import Socialicon from './social-icon/Socialicon'
import {scrollToSection} from "../utils/helper"
function Footer() {
  return (
    <div>
      <Section background="dark" id="footer">
        <div className="footer-content-wrapper">
            <ul className="footer-menu-items">
                <li className="footer-menu-item" onClick={()=>{scrollToSection("skills")}}>Skills</li>
                <li className="footer-menu-item" onClick={()=>{scrollToSection("portfolio")}}>Projects</li>
                <li className="footer-menu-item" onClick={()=>{scrollToSection("intrest")}}>Intrests</li>
                <li className="footer-menu-item" onClick={()=>{scrollToSection("section")}}>Contact Me</li>

            </ul>

            <div className="social-icon">
                {/* <Socialicon color = "#FF0000" icon = {<FaYoutube/>} link="https:/www.youtube.com"/> */}
                <Socialicon color = "#0D2636" icon = {<FaGithub/>} link="https://github.com/ykanish"/>
                <Socialicon color = "#0A66C2" icon = {<FaLinkedinIn/>} link="https://www.linkedin.com/in/kanishk-yadav-357b93221/"/>

            </div>

            <div className="bottom-bar">
                <div className="copyright-text">
                    Copyright &copy; 2023 Kanishk Yadav| All rights reserved <br />
                                      Made By Kanishk Yadav❤️
                </div>
            </div>
        </div>
      </Section>
    </div>
  )
}

export default Footer
