import React from 'react'
import Cover from './Cover'
import ConverInfo from './ConverInfo'

export default function FirstSection({artists_names, date_release, album_name, cover_image}) {
  return (
    <section>
        <Cover cover_image={cover_image}  date_release={date_release}/>
        <ConverInfo artists_names={artists_names} album_name={album_name}/>
    </section>
  )
}
