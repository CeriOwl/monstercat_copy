import React from 'react'
import ButtonStream from './ButtonStream'

const streams = [
  { icon_name: "play", icon_type: "", icon_text: "player" },
  { icon_name: "compass", icon_type: "solid", icon_text: "" },
  { icon_name: "soundcloud", icon_type: "logo", icon_text: "" },
  { icon_name: "apple", icon_type: "logo", icon_text: "" },
  { icon_name: "youtube", icon_type: "logo", icon_text: "" },
  { icon_name: "spotify", icon_type: "logo", icon_text: "" }
]

export default function SecondSection() {
  return (
    <section>
        <h2>stream it your way</h2>
        <div>
          {
            streams.map((stream) => {
              return <ButtonStream icon_name={stream.icon_name} icon_type={stream.icon_type} icon_text={stream.icon_text} />
            })
          }
        </div>
    </section>
  )
}
