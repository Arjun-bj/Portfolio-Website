// import React from 'react'
import Hexagon from "./Hexagon"
import { FaHtml5, FaNode, FaReact, FaBootstrap,FaFigma } from "react-icons/fa6"; 
import { IoLogoJavascript, IoLogoCss3,  } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiAdobexd   } from "react-icons/si";
import imgUrl from "../logos";


const SkillSection = () => {

  return (
    <section className="">
      <div className="container">
        <div>
          <div style={{ position: "relative" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" data-aos-once="true">
            <h2 className="ghost-sub-heading">Skills</h2>
            <h1 className="common-heading">My Skills</h1>
          </div>
          <div className="honeyComb mb-36" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200" data-aos-once="true">
            <Hexagon  className={"M-Hex component-target"} style={{ top: "100%" }} icon={<FaReact/>} imgUrl={imgUrl.react}/>
            <Hexagon  className={" component-target"} style={{ left: "38%" }} icon={<IoLogoJavascript/>} imgUrl={imgUrl.javascript}/>
            <Hexagon  className={"S-Hex component-target"} style={{ top: "100%", left: "15%" }} icon={<FaFigma/>} imgUrl={imgUrl.figma}/>
            <Hexagon  className={"Vs-Hex component-target"} style={{ top: "57%", left: "-18%" }} icon={<FaBootstrap/>} imgUrl={imgUrl.bootstrap}/>
            <Hexagon  className={"Vs-Hex component-target"} style={{ top: "81%", left: "-64%" }} icon={<RiTailwindCssFill/>} imgUrl={imgUrl.tailwindcss}/>
            <Hexagon  className={"Vs-Hex component-target"} style={{ top: "136%", left: "60%" }} icon={<SiAdobexd/>} imgUrl={imgUrl.xd}/>
            <Hexagon  className={"S-Hex component-target"} style={{ top: "75%", left: "30%" }} icon={<SiRedux/>} imgUrl={imgUrl.redux}/>
            <Hexagon  className={"M-Hex component-target"} style={{ top: "130%", left: "4%" }} icon={<FaNode/>} imgUrl={imgUrl.node}/>
            <Hexagon  className={"M-Hex component-target"} style={{ top: "68%", left: "-14%" }} icon={<FaHtml5/>} imgUrl={imgUrl.html}/>
            <Hexagon  className={"M-Hex component-target"} style={{ top: "52%", left: "-20%" }} icon={<IoLogoCss3/>} imgUrl={imgUrl.css}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection