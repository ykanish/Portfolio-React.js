import React from 'react'
import "./style.scss"
import { useState } from 'react'

const filterData = [
    {
        name:"All",
        id:"all"
    },
    {
        name:"Web Page",
        id:"web-page"
    },
    {
        name:"Data Analyst",
        id:"data-analysis"
    },
    {
        name:"Machine Learning",
        id:"machine-learning"
    }

]

function Filter({filterProjects}) {

    const[active,setActive] = useState("")

    const clickHandler =(id)=>{
        setActive(id);
        filterProjects(id);
        console.log(filterProjects);
    }
    
  return (
    <div className='fil'>
      <ul className="filters-menu-items">
        
            {filterData.map((e,index)=>{
                return (<li className={`filter-menu ${active===e.id?"active":""}`} key={e.id} onClick={()=>{clickHandler(e.id)}}>{e.name}</li>)
            })}
        </ul>
    </div>
  )
}

export default Filter
