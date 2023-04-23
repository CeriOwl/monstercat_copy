import React from 'react'

export default function ButtonStream ({icon_name, title, icon_text}) {
  return (
    <div className='icon-second-part'>
      <a href="#">
        <i className={`bx ${icon_name}`}></i>
        {
          icon_text ? icon_text : " "
        }
      </a>
      <span className='title'>stream on {title}</span>
    </div>
  )
}
