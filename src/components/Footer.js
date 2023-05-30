import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import './Footer.css';

// BsGithub
// BsInstagram
// BsFacebook
// BsLinkedin
// BsArrowRightShort

const Footer = () => {
  return (
    <div className='foot relative'>
        <div className='foot-icon'>
            <a href='https://www.facebook.com/profile.php?id=100079013157348'><BsFacebook/></a>
            <a href='https://www.facebook.com/profile.php?id=100079013157348'><RiMessengerLine/></a>
            <a href='https://www.instagram.com/_ramkrishna02/'><BsInstagram/></a>
        </div>
        <div>© Ramkrishna Maity. All rights reserved</div>
    </div>
  )
}

export default Footer