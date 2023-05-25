import getTokenSpotify from "./getTokenSpotify"

export default function getIdAlbum(artist, album) {
  const url_album = `https://api.spotify.com/v1/search?q=${artist}:${album}&type=artist%2Calbum&limit=1`
  searchId(url_album)
}

const searchId = url_album => {
  /*
  getTokenSpotify().then(token => {
    const sabe = fetch(url_album, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    sabe.then(response => response.json())
    .then(data => console.log(data))
  })
  */
 console.log(url_album)
}