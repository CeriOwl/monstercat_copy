import React from 'react'
import LinkIcon from './LinkIcon'

const icons = [
    "youtube",
    "instagram",
    "tiktok",
    "twitter",
    "spotify",
    "apple",
    "twitch",
    "facebook-circle",
    "discord",
    "reddit",
    "play-circle"
]

export default function SecondPart() {
  return (
    <section>
        <p>2011 - 2023 © Monstercat, All Rights Reserved</p>
        <div>
            <ul>
                {
                    icons.map(icon => <LinkIcon icon_name={icon}/>)
                }
            </ul>
        </div>
    </section>
  )
}
