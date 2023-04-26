import React from 'react'
import LogoMonstercat from './LogoMonstercat'
import ButtonMenu from './ButtonMenu'
import Navbar from './Navbar'
import "./header.css"

export default function Header() {
  return (
    <header id="header">
      <div>
        <LogoMonstercat/>
        <Navbar/>
        <ButtonMenu/>
      </div>
    </header>
  )
}
