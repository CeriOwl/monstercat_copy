import React from 'react'

export default function Link({name}) {
  return (
    <li key={name}>
        <a href="#">{name}</a>
    </li>
  )
}
