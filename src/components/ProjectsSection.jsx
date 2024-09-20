// import React from 'react'
import projectImg1 from '../assets/images/Screenshot 2024-09-03 135815.png'
import projectImg2 from '../assets/images/Screenshot 2024-09-03 123708.png'
import projectImg3 from '../assets/images/Screenshot 2024-09-03 150554.png'
import projectImg4 from '../assets/images/Screenshot 2024-09-20 133129.png'
// import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsSection = () => {
    return (
        <section>
            <div className='container'>
                <div>
                    <div style={{ position: "relative" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" data-aos-once="true">
                        <h1 className='ghost-sub-heading'>Projects</h1>
                        <h2 className='common-heading' style={{ marginBottom: "80px" }}>My Projects</h2>
                    </div>
                    <div className='project-maincard' style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "95px", marginTop: "15px", alignItems: "center" }} data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1500" data-aos-once="true">
                        <div className='project-card'>
                            <div className='image-card overflow-hidden filled-target'><a href="https://www.figma.com/proto/0BaMVOqKH5MV37zwoCJQoo/Video-Game-Store?page-id=0%3A1&node-id=8-47&node-type=FRAME&viewport=462%2C-391%2C0.55&t=gsWdBbYR4lqn0tn2-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8%3A47" target="_blank"><img src={projectImg2} alt="" /></a></div>
                            <h5 className='project-title text-2xl font-medium mt-4 inline-flex relative'>GameFY Website UI</h5>
                        </div>
                        <div className='project-card'>
                            <div className='image-card overflow-hidden filled-target'><a href="https://learning-website-design.vercel.app/" target="_blank"><img src={projectImg1} alt="" /></a></div>
                            <h5 className='project-title text-2xl font-medium mt-4 inline-flex relative'>EduClub Website UI</h5>
                        </div>
                        <div className='project-card'>
                            <div className='image-card overflow-hidden filled-target'><a href="https://www.figma.com/proto/iI94CMmeSGV9ggi6oLDFfg/Task-Management-System?page-id=0%3A1&node-id=2-34&node-type=FRAME&viewport=471%2C911%2C0.7&t=nPBo57g9vD3Qs6rv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A34" target="_blank"><img src={projectImg3} alt="" /></a></div>
                            <h5 className='project-title text-2xl font-medium mt-4 inline-flex relative'>Taskie Web-App UI</h5>
                        </div>
                        <div className='project-card'>
                            <div className='image-card overflow-hidden filled-target'><a href="https://www.figma.com/proto/rrjNsOksBbQ4eoz3TkBO2p/Freshy-Grocery-App?page-id=0%3A1&node-id=47-7&node-type=CANVAS&viewport=550%2C488%2C0.49&t=CmyvW1V0xuS1pcOF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A215&show-proto-sidebar=1" target="_blank"><img src={projectImg4} alt="" /></a></div>
                            <h5 className='project-title text-2xl font-medium mt-4 inline-flex relative'>FreshEz Mobile-App UI</h5>
                        </div>
                    </div>
                    {/* <a className="commonBtn" href="">
                        <span className='button-content first'>View all projects <i style={{ transition: "transform 0.3s ease" }}><FaArrowRightLong /></i></span>
                        <span className='button-content second'>View all projects <i style={{ transition: "transform 0.3s ease" }}><FaArrowRightLong /></i></span>
                    </a> */}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection