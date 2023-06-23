import getTokenSpotify from "./getTokenSpotify"


export default function getArtists(artist) {
  const url_album = `https://api.spotify.com/v1/search?q=${artist}&type=artist`
  return searchId(url_album)
}

const searchId = async url_album => {
  return getTokenSpotify().then(token => {
    return fetch(url_album, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => getAllData(data.artists.items))
  })
}

const getAllData = data => {
  return data.map(artist => {
    return {
      id: artist.id,
      name: artist.name,
      img: getImage(artist.images)
    }
  })
}

const getImage = images => {
  if(images.length !== 0) {
    return images[0].url
  }
  return undefined 
}