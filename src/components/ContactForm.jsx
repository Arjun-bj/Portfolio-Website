// import React from 'react'
import { RxPaperPlane } from "react-icons/rx";

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "YOUR_ACCESS_KEY");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return (
        <div className="border-2 rounded-3xl border-gray-800" data-aos="fade-left" data-aos-duration="1000">
            <form  onSubmit={onSubmit} className=" gap-7 p-8 grid sm:grid-cols-1" style={{ border: "ipx solid #ffffff1a" }}>
                <div className="inputs-card">
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="user_name" required />
                </div>
                <div className="inputs-card">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="user_email" required />
                </div>
                <div className="inputs-card">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" required />
                </div>
                <div className="inputs-card">
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="" required></textarea>
                </div>
                <button className="commonBtn" type="submit">
                    <span className="button-content first">Send message<RxPaperPlane /></span>
                    <span className="button-content second">Send message<RxPaperPlane /></span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm