import React from 'react'
import "./style.scss"
import Arrow from '../../arrowicon/Arrow'
function Showcase(props) {
  return (
    <div className='projects-showcase'>
        {props.data.map((e)=>{
            return (<div key={e.name} className={`showcase-item ${props.transition === "zoomout"? 'zoomOut':props.transition==="zoomIn"?"zoomin":""}`}>
                <div className="meta-content">
                    <h3>{e.name}</h3>
                    <div className="go-to-cta">
                        <a rel="noreferrer" className="text" href='https://github.com/vijit200' target="_blank" style={{whiteSpace:"nowrap", textDecoration:"none",color:"black"}}>
                            <b>GitHub</b>
                        </a>
                        &nbsp;&nbsp;
                        <a rel="noreferrer" className="text" href='https://github.com/vijit200' target="_blank" style={{whiteSpace:"nowrap" ,textDecoration:"none",color:"black"}}>
                            <b>Project Link</b> 
                        </a>
                        <Arrow/>
                    </div>
                </div>
                <img src={e.media.thumbnail} alt="" />
            </div>)
        })}
      
    </div>
  )
}

export default Showcase
