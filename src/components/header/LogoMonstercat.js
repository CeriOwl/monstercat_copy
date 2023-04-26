import React from 'react'
const path = process.env.PUBLIC_URL

export default function LogoMonstercat() {
  return (
    <a href="#">
        <img src={path + "/monstercat_logo.jpeg"} alt="" />
    </a>
  )
}
