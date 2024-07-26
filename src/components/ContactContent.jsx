// import React from 'react'

const ContactContent = ({datas}) => {
    const Icon = datas.icon;
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="info-card flex-properties" style={{justifyContent: "unset"}}>
        <span className="flex-properties"><Icon/></span>
        <h4 className="mt-5 mb-2.5">{datas.title}</h4>
        <p className="w-52 text-base text-center">
            <a href={datas.url} style={{color: "#CCC"}}>{datas.details}</a>
        </p>
    </div>
  )
}

export default ContactContent;