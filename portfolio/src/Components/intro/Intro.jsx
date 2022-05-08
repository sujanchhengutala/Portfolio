import React from 'react'
import './intro.css'
import  instragram from '../../img/instagram.png'
import  github from '../../img/github.png'
import  linkdin from '../../img/linkdin.png'
import  clip1 from '../../img/clip1.png'
import  clip2 from '../../img/clip2.png'
import  boy from '../../img/boy.png'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Sujan Chhengutala</span>
                <p>Frontend Developer with a good knowledge in web designing and development.</p>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <img src={instragram} alt="" />
                <img src={github} alt="" />
                <img src={linkdin} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={clip1} alt="" />
            <img src={clip2} alt="" />
            <img src={boy} alt="" />
        </div>
    </div>
  )
}

export default Intro