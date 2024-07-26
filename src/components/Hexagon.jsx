// import React from 'react'

const Hexagon = ({className, style, imgUrl, icon}) => {
  return (
    <div className={`hexagon ${className} flex-properties`} style={style}>
      <div className="">
        <i className="">{icon}</i>
        <img  style={{transition: "all 0.3s ease-in-out"}} className="toolsImg hidden" src={imgUrl} alt="" />
      </div>
    </div>
  )
}

export default Hexagon