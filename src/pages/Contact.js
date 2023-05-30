import React from 'react'
import './Contact.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {TbSend} from 'react-icons/tb'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { toast } from 'react-toastify'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oay4zgu', 'template_7uaglxm', form.current, 'CFdPFHxyk7I1TSi4u')

      e.target.reset();
      toast.success("message sent successfully.")
  };


  return (
    <div className='project-container container relative'>
      <div className='tag-text relative'>
            <h2 className='tag'>Contact Me</h2>
            <p>Get in Touch</p>
      </div>
      <div className='project-main'>
        <div className='part-1'>
          <div className='box'>
            <HiOutlineMail className='box-icon'/>
            <p>Email</p>
            <p>ramkrishna@gmail.com</p>
            <a href='mailto:ramkrishnamaity4146@gmail.com'>Write me <BsArrowRightShort className='arrow'/></a>
          </div>
          <div className='box'>
            <BsGithub className='box-icon'/>
            <p>GitHub</p>
            <p>Ramkrishnamaity</p>
            <a href='https://github.com/Ramkrishnamaity/'>Write me <BsArrowRightShort className='arrow'/></a>
          </div>
          <div className='box'>
            <BsLinkedin className='box-icon'/>
            <p>Linkedin</p>
            <p>ramkrishna-maity</p>
            <a href='https://www.linkedin.com/in/ramkrishna-maity/'>Write me <BsArrowRightShort className='arrow'/></a>
          </div>
        </div>
        <div className='part-2'>
          <form className='form-container' ref={form} onSubmit={sendEmail}>
            <fieldset>
              <legend>Name</legend>
              <input type='text' name='name' placeholder='Insert your name'/>
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <input type='email' name='email' placeholder='Insert your email'/>
            </fieldset>
            <fieldset>
              <legend>Project</legend>
              <textarea name='message' placeholder='Write your project'></textarea>
            </fieldset>
            
            <div className='contact-btn relative'>
              <button className='btn'>Send Message <TbSend/></button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact