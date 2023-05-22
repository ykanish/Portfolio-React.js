import React from 'react'
import './style.scss'
function Socialicon(props) {
  return (
    <div className='social-icon' style={{backgroundColor: props.color}} onClick={()=>{
        window.open(props.link,"_blank")
    }}>
      {props.icon}
    </div>
  )
}

export default Socialicon
