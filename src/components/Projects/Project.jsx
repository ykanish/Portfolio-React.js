import React from 'react'
import './style.scss'
import Section from "../shared/section/Section"
import Filter from './filters/Filter'
import Showcase from './showcase/Showcase'
import { useState } from 'react'

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
]

function Project() {

  const[project,setProjects] = useState(projectsData)
  const[transition,setTransition] = useState(false)
  const filterProjects =(tag)=>{
        setTransition("zoomout")
        setTimeout(()=>{
            if(tag!=="all"){
                const filteredProjects = projectsData.filter((f)=>{
                    return (f.tags.includes(tag))
                })
                setProjects(filteredProjects)
            }
            else{
                setProjects(projectsData)
            }
            setTransition("zoomin")
        },200)

        setTimeout(()=>{setTransition(false)},600)
  }
  return (
    <div>

    

    <Section
            id="portfolio"
            title="Projects"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filter filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={project}
                    transition={transition}
                />
            </div>
        </Section>

      
    </div>
  )
}

export default Project
