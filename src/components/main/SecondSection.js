import React from 'react'
import ButtonStream from './ButtonStream'

const streams = [
  { icon_name: "bx-play", icon_text: "player", title: "Monstercat Player" },
  { icon_name: "bxs-compass", icon_text: "", title: "Bandcamp" },
  { icon_name: "bxl-soundcloud", icon_text: "", title: "Soundcloud" },
  { icon_name: "bxl-apple", icon_text: "", title: "Apple Music" },
  { icon_name: "bxl-youtube", icon_text: "", title: "Youtube" },
  { icon_name: "bxl-spotify", icon_text: "", title: "Spotify" }
]

export default function SecondSection() {
  return (
    <section>
        <h2>stream it your way</h2>
        <div>
          {
            streams.map((stream) => {
              return <ButtonStream icon_name={stream.icon_name} title={stream.title} icon_text={stream.icon_text} />
            })
          }
        </div>
    </section>
  )
}
