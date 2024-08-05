// import React from 'react'
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMdShare } from "react-icons/io";

const Footer = () => {
  return (
    <footer >
      <div className="footer-card p-10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className=" footer-inner flex items-center justify-between">
          <div>
            <p className="text-base">&copy; 2024 Arjunbj | All rights reserved</p>
          </div>
          <div className="footer-social"  style={{width: "20%"}}>
            <div className="social-text">
              <h6 className="flex items-center justify-end gap-2">
                Follow
                <IoMdShare />
              </h6>
            </div>
            <div className="social-buttons">
              <ul className="flex justify-evenly text-xl">
                <li><a href="https://www.facebook.com/"><IoLogoFacebook/></a></li>
                <li><a href="https://github.com/Arjun-bj"><IoLogoGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/arjun-bj-140327312/"><IoLogoLinkedin/></a></li>
                <li><a href="https://www.instagram.com/"><IoLogoInstagram/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer