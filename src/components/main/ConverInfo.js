import React from 'react'
import Button from './Button'

export default function ConverInfo({artists_names, album_name}) {
  return (
    <div className='cover-info'>
        <h1>{album_name}</h1>
        <p>{artists_names}</p>
        <div>
            <Button icon_name="play" button_action="listen now"/>
            <Button icon_name="share-alt" button_action="share"/>
        </div>
    </div>
  )
}