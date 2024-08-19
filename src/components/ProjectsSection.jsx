// import React from 'react'
import projectImg1 from '../assets/images/Screenshot 2024-07-17 160339.png'
const ProjectsSection = () => {
  return (
    <section>
        <div className='container'>
            <div>
                <div style={{position: "relative"}}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" data-aos-once="true">
                    <h1 className='ghost-sub-heading'>Projects</h1>
                    <h2 className='common-heading' style={{marginBottom: "80px"}}>My Projects</h2>
                </div>
                <div className='project-maincard' style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", marginTop: "15px"}} data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1500" data-aos-once="true">
                    <div className='project-card overflow-hidden filled-target'><a href="https://learning-website-design.vercel.app/"><img src={projectImg1} alt="" /></a></div>
                    <div><a href="#"></a></div>
                    <div><a href="#"></a></div>
                    <div><a href="#"></a></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection