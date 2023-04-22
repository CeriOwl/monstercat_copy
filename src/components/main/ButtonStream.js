import React from 'react'

export default function ButtonStream ({icon_name, icon_type, icon_text}) {
  return (
    <div>
      <a href="#">
      {
        icon_type ? <box-icon name={icon_name} type={icon_type}></box-icon> : <box-icon name={icon_name}></box-icon>
      }
      {
        icon_text ? icon_text : " "
      }
      </a>
    </div>
  )
}
