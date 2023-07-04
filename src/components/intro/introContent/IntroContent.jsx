import React from 'react'
import handIcon from '../../../images/hand.png'
import CalltoAction from '../../shared/CalltoAction/CalltoAction'
import boy from '../../../images/linkedprofile.jpeg'
// import { BsAwardFill} from 'react-icons/bs'
import "./style.scss"
function IntroContent() {
  return (
    <div className='intro-content'>
      <div className="layout">
        <div className="left-col">
            <h1 className='title'>
                <span className="small-text">
                    <span className="text">Hello </span>
                    <span className="icon"><img src={handIcon} alt="hand" /></span>
                    <span className="text">, I Am</span>
                </span>
                <span className="big-text">
                        Kanishk Yadav
                </span>
            </h1>
            <p>Bsides being a skilled Software Developer am also interested in Coding practises and learning Algorithms. Apart from that am also a certified Cloud Practiner. I bring designs to life, optimize performance as well as make machines to run at their best.
            </p>
            {/* <CalltoAction text="Get Started"/> */}
        </div>

        <div className="right-col">
                <img src={boy} alt="boy"/>
                {/* <div className="highlight horizontal">
                    <div className="icons">
                    <BsAwardFill/> </div>
                    <div className="text">
                        Best Design Award
                    </div>
                    
                    </div> */}
                {/* <div className="highlight vertical">
                        <div className="icons">
                        <BsAwardFill/>

                           </div>

                        <div className="text">
                            <span>4k+</span>
                            Happy Customer
                        </div>
                </div> */}
        </div>
      </div>
    </div>
  )
}

export default IntroContent
