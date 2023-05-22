import React from 'react'
import './style.scss'
import Section from '../shared/section/Section'
import Contactinfo from './contact-info/Contactinfo'
import Form from './Form/Form'
function Contact() {
  return (
    <div>
      <Section id = "section" background="light" title="Contact Us">
        <div className="contact-content-wrapper">
            <Contactinfo/>
            <Form/>
        </div>
      </Section>
    </div>
  )
}

export default Contact
