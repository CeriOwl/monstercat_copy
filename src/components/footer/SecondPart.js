import React from 'react'
import LinkIcon from './LinkIcon'

const icons = [
    "bxl-youtube",
    "bxl-instagram",
    "bxl-tiktok",
    "bxl-twitter",
    "bxl-spotify",
    "bxl-apple",
    "bxl-twitch",
    "bxl-facebook-circle",
    "bxl-discord",
    "bxl-reddit",
    "bx-play-circle"
]

export default function SecondPart() {
  return (
    <section className='second-part'>
        <p>2011 - 2023 © Monstercat, All Rights Reserved</p>
        <nav>
            <ul>
                {
                    icons.map(icon => <LinkIcon icon_name={icon}/>)
                }
            </ul>
        </nav>
    </section>
  )
}
