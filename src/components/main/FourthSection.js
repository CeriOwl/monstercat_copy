import React, { useState } from 'react'
import getIdAlbum from '../logic/getIdAlbum'

import toast from 'react-hot-toast';

export default function FourthSection({setIdAlbum}) {
  const [artist_name, setArtistNameSearch] = useState("")
  const [album_name, setAlbumNameSearch] = useState("")

  const handleName = name => {
    setArtistNameSearch(name.target.value)
  }

  const handleAlbum = name => {
    setAlbumNameSearch(name.target.value)
  }

  const styles_notifications = {
    position: "bottom-right",
    style: {
      backgroundColor: "black",
      color: "#f1f1f1"
    }
  }


  const notify_error_search = () => toast.error("Include the artist and album's name.", styles_notifications)

  const notify_no_existence = () => toast.error("Album no founded.", styles_notifications)

  const notify_existence = () => toast.success("Album encountered. Web paged.", styles_notifications)

  const handleSearch = () => {
    if(artist_name !== "" && album_name !== "") {
      getIdAlbum(artist_name, album_name).then(id => {
        if(id !== -1) {
          notify_existence()
          setIdAlbum(id)
        }else {
          notify_no_existence()
        }
      })
    }else {
      notify_error_search()
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
