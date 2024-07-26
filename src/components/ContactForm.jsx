// import React from 'react'
import { RxPaperPlane } from "react-icons/rx";

const ContactForm = () => {
    return (
        <div className="border-2 rounded-3xl border-gray-800" data-aos="fade-left" data-aos-duration="1000">
            <form action="" className=" gap-7 p-8 grid sm:grid-cols-1" style={{ border: "ipx solid #ffffff1a" }}>
                <div className="inputs-card">
                    <label htmlFor="name">Your name</label>
                    <input type="text" />
                </div>
                <div className="inputs-card">
                    <label htmlFor="email">Email address</label>
                    <input type="email" />
                </div>
                <div className="inputs-card">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" />
                </div>
                <div className="inputs-card">
                    <label htmlFor="">Message</label>
                    <textarea name="" id=""></textarea>
                </div>
                <button className="commonBtn">
                    <span className="button-content first">Send message<RxPaperPlane/></span>
                    <span className="button-content second">Send message<RxPaperPlane/></span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm