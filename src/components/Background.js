import React, { useEffect } from 'react'
import "./background.css"

export default function Background({image_background}) {
  
  useEffect(() => {
    
    const background = document.getElementById("bg-image")
    if(background) {
      background.style.backgroundImage = `url("${image_background}")`
    }
  }, [image_background])

  return (
    <div className="background-album">
      <div className='background-image' id='bg-image'></div>
    </div>
  )
}
