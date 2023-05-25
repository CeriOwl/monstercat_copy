import React, { useState } from 'react'
//import getIdAlbum from '../logic/getIdAlbum'

export default function FourthSection({}) {
  // () => setIdAlbum("5JpH5T1sCYnUyZD6TM0QaY")
  const [artist_name, setArtistNameSearch] = useState("")
  const [album_name, setAlbumNameSearch] = useState("")

  const handleName = name => {
    setArtistNameSearch(name.target.value)
  }

  const handleAlbum = name => {
    setAlbumNameSearch(name.target.value)
  }

  const handleSearch = () => {
    console.log("Ja")
    //getIdAlbum(artist_name, album_name)
  }
  return (
    <section>
      <h2>search another album</h2>
      <div>
        <input type="text" name="artist" id="artist" placeholder="Artist's name" onChange={handleName} />
        <input type="text" name="album" id="album" placeholder="Album's name" onChange={handleAlbum}/>
        <button><span className='search-title'>Search</span><i class='bx bx-search'></i></button>
      </div>
    </section>
  )
}
