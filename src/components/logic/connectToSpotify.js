import { Buffer } from "buffer"

const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_SECRET_ID
const url_token = "https://accounts.spotify.com/api/token"
const url_album = "https://api.spotify.com/v1/albums"

export default function getData(id_album = "1GG6U2SSJPHO6XsFiBzxYv") {
    return fetch(url_token, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64")
        },
        body: "grant_type=client_credentials"
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            const tracks = fetch(`${url_album}/${id_album}/tracks?limit=50`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${data.access_token}`
                }
            }).then(response => response.json())
                .then(data => {
                    const data_track = data.items.map(track => {
                        const ms = track.duration_ms;
                        const minutes = Math.floor(ms / 60000)
                        const seconds = ((ms % 60000) / 1000).toFixed(0)
                        const duration_formated = `${(minutes < 10 ? "0" : "")}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
                        return { name: track.name, duration: duration_formated }
                    })
                    return data_track
                })
            const album_info = fetch(`${url_album}/${id_album}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${data.access_token}`
                }
            }).then(response => response.json())
                .then(data => {
                    return {name_album: data.name, image_album: data.images[0].url, artist_names: formatNames(data.artists), date: formatDateRelease(data.release_date)}
                })

            return {tracks, album_info}
        })
}

function formatDateRelease(date) {
    const date_separated = date.split("-")
    const month_to_number = parseInt(date_separated[1], 10) - 1
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[month_to_number]} ${date_separated[2]}, ${date_separated[0]}`
}

function formatNames(artist) {
    let artistToReturn = ""
    const length = artist.length - 1
    if(artist.length > 1) {
        artist.forEach((artist,index) => {
            if(index === length) {
                artistToReturn += artist.name
            }else {
                artistToReturn += `${artist.name} | `
            }
        })
    }else {
        artistToReturn = artist[0].name
    }
    return artistToReturn
}
