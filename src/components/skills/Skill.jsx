import React from 'react'
import {AiOutlineCloudDownload} from "react-icons/ai"
import Section from '../shared/section/Section'
import skillimg from '../../images/tech-icons.png'
import "./style.scss"
import CalltoAction from '../shared/CalltoAction/CalltoAction'
function Skill() {
  const downloadCV = (url)=>{
    window.open(url,"_blank")
  }

  return (
    <div>
      <Section background="dark" id="skills">
        <div className="skills-content-wrapper">
            <div className="left-cols">
                <img src={skillimg} alt="" />
            </div>
            <div className="right-cols">
                <h2>Skills</h2>
                <p>
                  <large><b><u>Frontend Developer</u> -</b> &nbsp; HTML,&nbsp;  CSS,&nbsp;  SAAS,&nbsp;  JavaScript,&nbsp; React.js,&nbsp; Redux,&nbsp;  Tailwind,&nbsp;  Bootstrap</large>
                  <br /><br />
                  <large><b><u>Backend Developer</u> -</b> &nbsp;Node.js, &nbsp; Express.js, &nbsp;Python</large>
                  <br /><br />
                  <large><b><u>Databases</u> -</b> &nbsp;MySQL, &nbsp; MongoDB</large>
                  <br /><br />
                  <large><b><u>Tools</u> -</b> &nbsp;Git, &nbsp;GitHub, &nbsp;Postman, &nbsp;Netlify</large>
                  <br /><br />
                  <large><b><u>Soft Skills</u> -</b> &nbsp;Interpersonal skills, &nbsp; Adaptibility, &nbsp; Team Work, &nbsp; Time Management, &nbsp; Problem Solving</large>

        
                </p>
                <CalltoAction text="Download cv" action = {()=>{downloadCV("https://media.licdn.com/dms/document/media/C4D1FAQFsYCdDeml2ow/feedshare-document-pdf-analyzed/0/1672290724658?e=1685577600&v=beta&t=wKntNgHV9aAXcjAjDzjjPz_s961GuiOxdyiYaVawUh8")}} className="btn" icons={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
      </Section>
    </div>
  )
}

export default Skill
