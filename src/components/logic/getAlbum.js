import getTokenSpotify from "./getTokenSpotify"

export default function getAlbum(id_album = "1GG6U2SSJPHO6XsFiBzxYv") {
  const url_album = "https://api.spotify.com/v1/albums"
  getAlbumInfo(id_album, url_album)
  //getTracksAlbum(id_album, url_album).then(tracks => console.log(tracks))
}

function getAlbumInfo(id_album, url_album) {
  return getTokenSpotify().then(token => {
    const tracks = fetch(`${url_album}/${id_album}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    tracks.then(response => response.json())
    .then(data => console.log(data))
  })
}

async function getTracksAlbum(id_album, url_album) {
  return getTokenSpotify().then(token => {
    const tracks = fetch(`${url_album}/${id_album}/tracks?limit=50`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    return tracks.then(response => response.json())
    .then(data => data.items)
  })
}