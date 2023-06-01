import React, { useState } from 'react'
import getArtists from '../logic/getArtists'
import handleNotifications from '../logic/notifications'
import IndividualArtist from './IndividualArtist'

export default function FourthSection({setIdAlbum}) {
  const [artist_name, setArtistNameSearch] = useState("")
  const [artists, setArists] = useState([])

  const handleName = name => {
    setArtistNameSearch(name.target.value)
  }

  const handleSearch = () => {
    if(artist_name !== "") {
      getArtists(artist_name).then(artist => {
        console.log(artist)
        setArists(artist)
        handleNotifications("existence")
      })
    }else {
      handleNotifications("no_existence")
    }
  }
  
  return (
    <section>
      <h2>search another album</h2>
      <div className='form-search-artist'>
        <input type="text" name="artist" id="artist" placeholder="Artist's name" onChange={handleName} />
        <button onClick={handleSearch}><span className='search-title'>Search</span><i class='bx bx-search'></i></button>
      </div>

      <div className='artists-selection'>
        <h1>Select the artist</h1>
        <button><i class='bx bxs-x-square'></i></button>
        {
          artists.length !== 0 ? artists.map(artist => <IndividualArtist id={artist.id} name={artist.name} image={artist.img} />) : ""
        }
      </div>
    </section>
  )
}
