import React from 'react'
import './style.scss'
import Section from "../shared/section/Section"
import Filter from './filters/Filter'
import Showcase from './showcase/Showcase'
import { useState } from 'react'

const projectsData = [
    {
        id: 1,
        name: "Tower Of Hanoi",
        tags: ["web-page", "Data Structure", "Game"],
        media: {
            thumbnail: require("../../images/portfolio/toh.jpg"),
            sitelink : "http://towershanoi.s3-website-us-east-1.amazonaws.com/",
            GitHub : "https://github.com/ykanish/TowerOfHanoi"
        },
    },
    // {
    //     id: 2,
    //     name: "Weather App",
    //     tags: ["web-page"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/weather app.webp"),
    //         sitelink : "https://weatherapp260.netlify.app/",
    //         GitHub : "https://github.com/vijit200/youtube_clone"
    //     },
    // },
    {
        id: 2,
        name: "Word Counter",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/word-counter.jpg"),
            sitelink : "https://ykanish.github.io/Word-Counter/",
            GitHub : "https://github.com/ykanish/Word-Counter"
        },
    },
    // {
    //     id: 4,
    //     name: "Amazon Food Sales",
    //     tags: ["data-analysis"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/amazomfood sales.png"),
    //         sitelink : "https://github.com/vijit200/amazonfood-sales",
    //         GitHub : "https://github.com/vijit200/amazonfood-sales"
    //     },
    // },
    {
        id: 3,
        name: "Web Crawler",
        tags: ["Data-Structure"],
        media: {
            thumbnail: require("../../images/portfolio/webcr.avif"),
            // sitelink : "https://github.com/vijit200/HR-Project",
            GitHub : "https://github.com/ykanish/Web-Scrapping"
        },
    },
    // {
    //     id: 6,
    //     name: "Mushroom Prediction",
    //     tags: ["machine-learning"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/mushroom.png"),
    //         sitelink : "https://github.com/vijit200/MushroomPrediction",
    //         GitHub : "https://github.com/vijit200/MushroomPrediction"
    //     },
    // },
    // {
    //     id: 7,
    //     name: "Mask Detection",
    //     tags: ["machine-learning"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/mask detection.png"),
    //         sitelink : "https://github.com/vijit200/Mask_Detection_CNN",
    //         GitHub : "https://github.com/vijit200/Mask_Detection_CNN"
    //     },
    // },
    {
        id: 8,
        name: "Amazon-Polly",
        tags: ["AI Tool"],
        media: {
            thumbnail: require("../../images/portfolio/aws.png"),
            // sitelink : "https://movixs.vercel.app/",
            GitHub : "https://github.com/ykanish/AmazonPollyhttps://github.com/vijit200/movixs"
        },
    },
    // {
    //     id: 9,
    //     name: "Food Recipe",
    //     tags: ["web-app", "mobile-app", "web-page"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/food.jpg"),
    //         sitelink : "https://foodrecipefnder.netlify.app/",
    //         GitHub : "https://github.com/vijit200/foodrecipe"
    //     },
    // },
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
