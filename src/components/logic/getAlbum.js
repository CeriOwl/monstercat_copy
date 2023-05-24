import getTokenSpotify from "./getTokenSpotify"

export default function getAlbum(id_album = "1GG6U2SSJPHO6XsFiBzxYv") {
  const url_album = "https://api.spotify.com/v1/albums"
  return getAlbumInfo(id_album, url_album)
}

const getAlbumInfo = async (id_album, url_album) => {
  return getTokenSpotify().then(token => {
    const tracks = fetch(`${url_album}/${id_album}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    return tracks.then(response => response.json())
    .then(data_album => {
      return {
        name_album : data_album.name,
        image_album : data_album.images[0].url,
        artist_names : formatNames(data_album.artists),
        date: formatDateRelease(data_album.release_date),
        tracks: formatTracks(data_album.tracks.items)
      }
    })
  })
}

const formatTracks = tracks => {
  return tracks.map(track => {
    const ms = track.duration_ms
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    const duration_formated = `${(minutes < 10 ? "0" : "")}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    return {
      name: track.name,
      duration: duration_formated
    }
  })
}

const formatDateRelease = date => {
  const date_separated = date.split("-")
  const month_to_number = parseInt(date_separated[1], 10) - 1
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[month_to_number]} ${date_separated[2]}, ${date_separated[0]}`
}

const formatNames = (artist) => {
  let artistToReturn = ""
  const length = artist.length - 1
  if(artist.length > 1) {
    artist.forEach((artist, index) => {
      (index === length) ? (artistToReturn += artist.name) : artistToReturn += `${artist.name} | `
    })
  }else {
    artistToReturn = artist[0].name
  }
  return artistToReturn
}