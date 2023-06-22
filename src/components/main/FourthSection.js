import React, { useState } from 'react'
import getArtists from '../logic/getArtists'
import handleNotifications from '../logic/notifications'
import IndividualArtist from './IndividualArtist'

export default function FourthSection({setIdAlbum}) {
  const [artist_name, setArtistNameSearch] = useState("")
  const [artists, setArists] = useState([])

  const [state_artists_search, setStateArtistsSearch] = useState(0)

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
      switchElements(true)
    }else {
      handleNotifications("no_existence")
    }
  }

  const switchElements = state => {
    const header = document.getElementById("header")
    const main = document.getElementById("main")
    const footer = document.getElementById("footer")
    if(state === true){
      header.classList.add("hidden-element")
      footer.classList.add("hidden-element")
      for(let i = 0; i < main.childElementCount - 1 ; i++) {
        main.childNodes[i].classList.add("hidden-element")
      }
      handleArtistsSelection()
    } else{
      header.classList.remove("hidden-element")
      footer.classList.remove("hidden-element")
      for(let i = 0; i < main.childElementCount - 1 ; i++) {
        main.childNodes[i].classList.remove("hidden-element")
      }
      handleArtistsSelection()
    }
  }

  const handleArtistsSelection = () => {
    const artist_selection = document.getElementById("artist-selection")
    if(state_artists_search === 0) {
      artist_selection.classList.add("open-artists")
      setStateArtistsSearch(1)
    } else if(state_artists_search === 2) {
      artist_selection.classList.remove("close-artists")
      artist_selection.classList.add("open-artists")
      setStateArtistsSearch(1)
    } else {
      artist_selection.classList.remove("open-artists")
      artist_selection.classList.add("close-artists")
      setStateArtistsSearch(2)
    }
  }

  return (
    <section>
      <h2>search another album</h2>
      <div className='form-search-artist'>
        <input type="text" name="artist" id="artist" placeholder="Artist's name" onChange={handleName} />
        <button onClick={handleSearch}><span className='search-title'>Search</span><i class='bx bx-search'></i></button>
      </div>

      <div className='artists-selection' id='artist-selection'>
        <div className='container-titles-btn'>
          <h1>Select the artist</h1>
          <i onClick={() => switchElements(false)} class='bx bxs-x-square'></i>
        </div>
        <div className='container-artists'>
          {
            artists.length !== 0 ? artists.map(artist => <IndividualArtist id={artist.id} name={artist.name} image={artist.img} />) : ""
          }
        </div>
      </div>
    </section>
  )
}
