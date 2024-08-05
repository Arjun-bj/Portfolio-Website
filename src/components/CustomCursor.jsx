// import React from 'react'
import { useEffect } from "react"
import { customCursor } from "../cursor"

const CustomCursor = () => {
  useEffect(() => {
    customCursor();
  });
  return (
    <div className="cursor"></div>
  )
}

export default CustomCursor