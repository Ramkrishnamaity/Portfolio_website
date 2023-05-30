import React from 'react'
import './About.css'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const About = () => {
  return (
    <div className='container about-container relative'>
        <div className='tag-text relative'>
            <h2 className='tag'>About Me</h2>
            <p>My introduction</p>
        </div>
        <div className='about-main'>
            <div className='about-image-container'>
                <div className='about-image'></div>
            </div>
            <div className='about-text-container'>
                <p className='about-desc relative'>
                    Hello viewers, this is a brief introduction of mine. I am pursuing B.Tech from Gargi Memorial Institute of Technology.I am a front-end-developer and also exploring full stack web development in MERN Stack. Apart from Web technologies, i am doing programming in different languages like C, Java, Python etc. I am now at learning phase and want to explore more in this field. Cuurently, i'm finding for an internship or a part-time job to use and improve the skills that i've learned.
                </p>
                <div className='btn-container relative'>
                <button className='btn relative'><a href='/' download>Download CV</a><span><AiOutlineCloudDownload /></span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About