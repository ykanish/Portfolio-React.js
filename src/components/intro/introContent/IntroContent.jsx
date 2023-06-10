import React from 'react'
import handIcon from '../../../images/hand.png'
import CalltoAction from '../../shared/CalltoAction/CalltoAction'
import girl from '../../../images/vijit.jpg'
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
                        Vijit Kumar
                </span>
            </h1>
            <p>As a skilled frontend developer, I excel at creating captivating user interfaces and engaging user experiences. With expertise in HTML, CSS, and JavaScript, I bring designs to life, optimize performance, and ensure seamless interaction between users and web applications.
            </p>
            <CalltoAction text="Get Started"/>
        </div>

        <div className="right-col">
                <img src={girl} alt="girl"/>
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
