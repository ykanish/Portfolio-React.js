import React from 'react'
import './style.scss'
import Arrow from '../../arrowicon/Arrow'

function CalltoAction(props) {
  return (
    <div className='call-to-action'>
        <span className="text" onClick={props.action}>
            {props.text}
        </span>
        {props.item?<div className='icon'>{props.icons}</div>:<Arrow/>}
      
    </div>
  )
}

export default CalltoAction
