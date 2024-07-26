// import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

const SocialSideBar = () => {
  return (
    <div>
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="800" className="social-wrapper">
            <a href="https://github.com/Arjun-bj"><IoLogoGithub/></a>
            <a href="https://www.linkedin.com/in/arjun-bj-140327312/"><IoLogoLinkedin/></a>
            <a href="https://www.instagram.com/"><IoLogoInstagram/></a>
        </div>
    </div>
  )
}

export default SocialSideBar