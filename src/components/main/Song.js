import React from 'react'
import 'boxicons'

export default function Song({ id, name_song, artist, duration }) {
  return (
    <div>
        <span className='id'>{id}</span>
        <button>
            <box-icon name='play'></box-icon>
        </button>
        <div>
            <span className='song-name'>{name_song}</span>
            <span className='artist-name'>{artist}</span>
        </div>
        <span className='duration'>{duration}</span>
        <button>
        <box-icon name='share-alt' ></box-icon>
        </button>
    </div>
  )
}
