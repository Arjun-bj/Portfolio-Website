// import React from 'react'
// import aboutGif from "../assets/images/Digital Marketing.gif"
import aboutGif from "../assets/images/IMG_67272.jpg"

const AboutSection = () => {
    return (
        <section>
            <div className="container">
                <div style={{ maxWidth: "100%" }} >
                    <div style={{ position: "relative" }} data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                        <h1 className="ghost-sub-heading">About</h1>
                        <h2 className="common-heading">About me</h2>
                    </div>
                    <div className="flex-between">
                        <p style={{ lineHeight: "1.4", fontSize: "calc(100% + 0.4vw)", width: "60%", textAlign: "justify" }} data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1500" data-aos-once="true">
                            {"I'm "}  a passionate self-taught Front End Developer and Designer dedicated to crafting engaging and visually stunning web experiences.
                             With a blend of technical expertise and a keen eye for design, I bring creative visions to life on the web.
                              My expertise in HTML, CSS, JavaScript, and various design tools enables me to create user-friendly, high-quality, and responsive websites.
                              <br/>
                              <br/>
                               I am committed to delivering seamless user experiences and thrive on solving complex problems, whether working on a team or independently.
                                I continually strive to improve my craft and stay ahead in the ever-evolving world of web development.
                        </p>
                        <img className="max-w-lg rounded-xl" style={{height: "450px"}} src={aboutGif} alt="" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1500" data-aos-once="true"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection