// import React from 'react'
import { contactData } from "../data"
import ContactContent from "./ContactContent"
import ContactForm from "./ContactForm"
import formImg from "../assets/images/freepik2-export-20240712115305LvbZ2.png"

const ContactSection = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div style={{ position: "relative" }}>
            <h2 className="ghost-sub-heading">Contact</h2>
            <h1 className="common-heading ">Contact Me</h1>
          </div>
          <div className="grid grid-cols-4 py-28 gap-x-8">
            {contactData.map((data, index) => (
              <ContactContent key={index} datas={data}/>
            ))}
          </div>
          <div className="grid gap-x-4 sm:grid-cols-2 py-16">
            <div className="" style={{width: "450px"}} data-aos="fade-right" data-aos-duration="1000">
              <div className="circle"></div>
              <img src={formImg} alt="img" className="max-w-full" />
            </div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection