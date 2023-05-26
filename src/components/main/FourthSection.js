import React, { useState } from 'react'
import getIdAlbum from '../logic/getIdAlbum'

export default function FourthSection({setIdAlbum}) {
  const [artist_name, setArtistNameSearch] = useState("")
  const [album_name, setAlbumNameSearch] = useState("")

  const handleName = name => {
    setArtistNameSearch(name.target.value)
  }

  const handleAlbum = name => {
    setAlbumNameSearch(name.target.value)
  }

  const handleSearch = () => {
    if(artist_name !== "" && album_name !== "") {
      getIdAlbum(artist_name, album_name).then(id => (id !== -1) ? setIdAlbum(id) : alert("Ese album no existe"))
    }else {
      alert("Please, introduce correct info")
    }
  }
  
  return (
    <section>
      <h2>search another album</h2>
      <div>
        <input type="text" name="artist" id="artist" placeholder="Artist's name" onChange={handleName} />
        <input type="text" name="album" id="album" placeholder="Album's name" onChange={handleAlbum}/>
        <button onClick={handleSearch}><span className='search-title'>Search</span><i class='bx bx-search'></i></button>
      </div>
    </section>
  )
}
