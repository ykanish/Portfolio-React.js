import React from 'react'
import './style.scss'
import Section from "../shared/section/Section"
import Filter from './filters/Filter'
import Showcase from './showcase/Showcase'
import { useState } from 'react'

const projectsData = [
    {
        id: 1,
        name: "Youtube Clone",
        tags: ["web-page", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/youtubeclone.png"),
            sitelink : "https://youtubeclone200.netlify.app/",
            GitHub : "https://github.com/vijit200/youtube_clone"
        },
    },
    {
        id: 2,
        name: "Weather App",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/weather app.webp"),
            sitelink : "https://weatherapp260.netlify.app/",
            GitHub : "https://github.com/vijit200/youtube_clone"
        },
    },
    {
        id: 3,
        name: "Word Counter",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/word-counter.jpg"),
            sitelink : "https://word-counterutils.netlify.app//",
            GitHub : "https://github.com/vijit200/TextUtils"
        },
    },
    {
        id: 4,
        name: "Amazon Food Sales",
        tags: ["data-analysis"],
        media: {
            thumbnail: require("../../images/portfolio/amazomfood sales.png"),
            sitelink : "https://github.com/vijit200/amazonfood-sales",
            GitHub : "https://github.com/vijit200/amazonfood-sales"
        },
    },
    {
        id: 5,
        name: "HR Dashboard",
        tags: ["data-analysis"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
            sitelink : "https://github.com/vijit200/HR-Project",
            GitHub : "https://github.com/vijit200/HR-Project"
        },
    },
    {
        id: 6,
        name: "Mushroom Prediction",
        tags: ["machine-learning"],
        media: {
            thumbnail: require("../../images/portfolio/mushroom.png"),
            sitelink : "https://github.com/vijit200/MushroomPrediction",
            GitHub : "https://github.com/vijit200/MushroomPrediction"
        },
    },
    {
        id: 7,
        name: "Mask Detection",
        tags: ["machine-learning"],
        media: {
            thumbnail: require("../../images/portfolio/mask detection.png"),
            sitelink : "https://github.com/vijit200/Mask_Detection_CNN",
            GitHub : "https://github.com/vijit200/Mask_Detection_CNN"
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
            sitelink : "https://youtubeclone200.netlify.app/",
            GitHub : "https://github.com/vijit200/youtube_clone"
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
