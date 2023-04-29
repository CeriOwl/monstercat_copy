import React from 'react'

export default function FourthSection({setIdAlbum}) {
  return (
    <section>
      <h2>search another album</h2>
      <div>
        <input type="text" name="artist" id="artist" placeholder="Artist's name" />
        <input type="text" name="album" id="album" placeholder="Album's name"/>
        <button onClick={() => setIdAlbum("5JpH5T1sCYnUyZD6TM0QaY")}><span className='search-title'>Search</span><i class='bx bx-search'></i></button>
      </div>
    </section>
  )
}
