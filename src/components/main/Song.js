import React from 'react'

export default function Song({ id, name_song, artists_names, duration }) {
  return (
    <div className='song'>
        <span className='id'>{id}</span>
        <button className='button-play'>
            <i className='bx bx-play'></i>
        </button>
        <div className='titles'>
            <span className='song-name'>{name_song}</span>
            <span className='artist-name'>{artists_names}</span>
        </div>
        <span className='duration'>{duration}</span>
        <button className='button-share'>
          <i className='bx bx-share-alt'></i>
        </button>
    </div>
  )
}
