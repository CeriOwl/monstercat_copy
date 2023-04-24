import React, { useState } from 'react'

export default function LinkIcon({icon_name}) {

  const posibilities = [
    "instagram",
    "tiktok",
    "twitter",
    "twitch",
    "facebook",
    "discord",
    "player",
    "youtube",
    "spotify",
    "apple",
    "reddit",
    "play"
  ]

  const wordIdentifiedArray = posibilities.map(element => {
    return icon_name.indexOf(element) !== -1 ? element : ""
  })

  const singleWord = wordIdentifiedArray.filter(e => {
    return e !== undefined ? e : ""
  })

  function getWordFormated(word) {
    const capitalized = word[0].toUpperCase() + word.slice(1);
    return word !== "play" ? `Monstercat on ${capitalized}` : `Monstercat Player`
  }

  return (
    <li>
        <a href="">
          <i className={`bx ${icon_name}`} title={getWordFormated(singleWord[0])}></i>
        </a>
    </li>
  )
}
