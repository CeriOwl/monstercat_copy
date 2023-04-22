import React from 'react'
import 'boxicons'

export default function Button({icon_name, button_action}) {
  return (
    <button>
        <box-icon name={icon_name}></box-icon>
        {button_action ? button_action : ""}
    </button>
  )
}
