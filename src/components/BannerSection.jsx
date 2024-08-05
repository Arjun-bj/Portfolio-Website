//  import React from 'react'
import bannerImg from '../assets/images/freepik-export-20240712115305LvbZ.png'
import { FaArrowRightLong } from "react-icons/fa6";
import cvPdf from "../assets/files/Arjunbj-cv.pdf"
const BannerSection = () => {
    return (
        <section style={{ marginTop: "-130px" }} className='banner'>
            <div className='container'>
                <div className='banner-content' >
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800" className='banner-left' style={{width: "30%"}}>
                        <h4 style={{ marginBottom: "0", color: "#CCC" }}>Hi there,</h4>
                        <h1 style={{ color: "#FFF", fontSize: "7.2vw", margin: "0" }}>
                            {"I'am"}
                            <br />
                            <span style={{ fontSize: "90px", color: "#890F0D",  }}>Arjun BJ</span>
                        </h1>
                        <p style={{ fontSize: "20px", marginBottom: "20px" }}>Frontend designer | developer</p>
                        <a className="commonBtn" href={cvPdf} download={cvPdf}>
                            <span className='button-content first'>Download CV <i style={{ transition: "transform 0.3s ease" }}><FaArrowRightLong /></i></span>
                            <span className='button-content second'>Download CV <i style={{ transition: "transform 0.3s ease" }}><FaArrowRightLong /></i></span>
                        </a>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" className="banner-right" style={{width: "45%"}}>
                        <img src={bannerImg} alt="banner" />
                    </div>
                </div>
                <div className='ghost-caption'>
                    <div data-aos="fade-up" data-aos-duration="800" >
                        <h1>HELLO</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection