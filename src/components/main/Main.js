import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import "./main.css"
import FourthSection from './FourthSection'

export default function Main({songs, setIdAlbum, artists_names, date_release, album_name, cover_image}) {
  return (
    <main id="main">
      <FirstSection artists_names={artists_names} date_release={date_release} album_name={album_name} cover_image={cover_image} />
      <SecondSection/>
      <ThirdSection songs={songs} artists_names={artists_names} />
      <FourthSection setIdAlbum={setIdAlbum}/>
    </main>
  )
}
