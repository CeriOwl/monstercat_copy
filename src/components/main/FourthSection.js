import React, { useEffect, useRef, useState } from 'react'
import getArtists from '../logic/getArtists'
import handleNotifications from '../logic/notifications'
import IndividualArtist from './IndividualArtist'
import IndividualAlbum from "./IndividualAlbum"
import getAllAlbums from '../logic/getAllAlbums'

export default function FourthSection({ setIdAlbum }) {
  const [artist_name, setArtistNameSearch] = useState("")
  const [artists, setArists] = useState([])
  const [state_artists_search, setStateArtistsSearch] = useState(0)
  const [artist_selected, setArtistSelected] = useState("")
  const [albums, setAlbums] = useState([])
  const [selecting_albums, setSelectingAlbums] = useState(0)

  useEffect(() => {
    if (artist_selected !== "") {
      getAllAlbums(artist_selected).then(albums_data => setAlbums(albums_data))
    }
  }, [artist_selected])

  const handleName = name => {
    setArtistNameSearch(name.target.value)
  }

  const handleSearch = () => {
    if (artist_name !== "") {
      getArtists(artist_name).then(artist => {
        setArists(artist)
        handleNotifications("existence")
      })
      switchElements(true)
    } else {
      handleNotifications("no_existence")
    }
  }

  const switchElements = state => {
    const header = document.getElementById("header")
    const main = document.getElementById("main")
    const footer = document.getElementById("footer")
    if (state === true) {
      header.classList.add("hidden-element")
      footer.classList.add("hidden-element")
      for (let i = 0; i < main.childElementCount - 1; i++) {
        main.childNodes[i].classList.add("hidden-element")
      }
      handleArtistsSelection()
    } else {
      header.classList.remove("hidden-element")
      footer.classList.remove("hidden-element")
      for (let i = 0; i < main.childElementCount - 1; i++) {
        main.childNodes[i].classList.remove("hidden-element")
      }
      handleArtistsSelection()
    }
  }

  const handleArtistsSelection = () => {
    const artist_selection = document.getElementById("artist-selection")
    if (state_artists_search === 0) {
      artist_selection.classList.add("open-artists")
      setStateArtistsSearch(1)
    } else if (state_artists_search === 2) {
      artist_selection.classList.remove("close-artists")
      artist_selection.classList.add("open-artists")
      setStateArtistsSearch(1)
    } else {
      artist_selection.classList.remove("open-artists")
      artist_selection.classList.add("close-artists")
      setStateArtistsSearch(2)
    }
  }

  const ref = useRef(null)
  const clearInput = () => {
    ref.current.value = ""
    setArtistNameSearch("")
  }

  return (
    <section>
      <h2>search another album</h2>
      <div className='form-search-artist'>
        <input type="text" name="artist" id="artist" placeholder="Artist's name" autoComplete='off' onChange={handleName} ref={ref} />
        <button onClick={handleSearch}><span className='search-title'>Search</span><i class='bx bx-search'></i></button>
      </div>

      <div className='artists-selection' id='artist-selection'>
        {
          selecting_albums === 0 ? 
          <div className='container-titles-btn sel-artist'>
            <h1>Select the artist</h1>
            <i onClick={() => switchElements(false)} class='bx bxs-x-square'></i>
          </div> 
          : ""
        }
        {
          selecting_albums === 1 ? 
          <div className='container-titles-btn sel-album'>
            <h1>Select the album</h1>
            <i onClick={() => setSelectingAlbums(0)} class='bx bxs-left-arrow-square'></i>
          </div> 
          : ""
        }
        {
          selecting_albums === 0 ? 
          <div className='container-artists'>
            {
              artists.length !== 0 ? artists.map(artist => <IndividualArtist setSelectingAlbums={setSelectingAlbums} setIdAlbum={setArtistSelected} id={artist.id} name={artist.name} image={artist.img} />) : ""
            }
          </div>
          : ""
        }
        {
          selecting_albums === 1 ?
          <div className='container-album'>
            {
              albums.length !== 0 ? albums.map(album => <IndividualAlbum clearInput={clearInput} setSelectingAlbums={setSelectingAlbums} switchElements={switchElements} setIdAlbum={setIdAlbum} id={album.id} name={album.name} image={album.image} />) : ""
            }
          </div>
          : ""
        }
      </div>
    </section>
  )
}
