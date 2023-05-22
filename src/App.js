import React from 'react'
import Intro from './components/intro/Index.jsx'
import './app.scss'
import Skill from './components/skills/Skill.jsx'
import Project from './components/Projects/Project.jsx'
import Intrest from './components/Intrest/Intrest.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Intro/>
      <Skill/>
      <Project/>
      <Intrest/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
