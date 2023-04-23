import React from 'react'
import 'boxicons'

export default function Button({icon_name, button_action}) {
  return (
    <button>
        <i class={`bx bx-${icon_name}`} ></i>
        {button_action ? button_action : ""}
    </button>
  )
}
