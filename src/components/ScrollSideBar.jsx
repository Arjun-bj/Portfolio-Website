// import React from 'react'
// import { BsArrowRightCircle } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const ScrollSideBar = () => {
    return (
        <div>
            <div className="side-wrapper scroll-wrapper" style={{transform: "translate(-50px) rotate(-90deg)", bottom: "48%", width: "fit-content"}} data-aos="fade-right" data-aos-duration="800" data-aos-delay="800">
                <a href="#banner" className="scroll-top" >
                    <p className="text-base mr-2.5">Scroll to top</p>
                    <FaArrowRightLong className="scrollIcon" style={{transition: "all 0.3s ease"}}/>
                </a>
            </div>
        </div>
    )
}

export default ScrollSideBar