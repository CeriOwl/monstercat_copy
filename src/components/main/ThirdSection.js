import React, { useEffect, useState } from 'react'
import { Buffer } from "buffer"
import Song from './Song'
const client_id = "8a0ed990f5654dbabed7d2d7fa3d5f4d"

const url_token = "https://accounts.spotify.com/api/token"
const url_album = "https://api.spotify.com/v1/albums"

export default function ThirdSection() {
    const [songs, setSongsData] = useState([])

    useEffect(() => {
        fetch(url_token, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64")
            },
            body: "grant_type=client_credentials"
        }).then(response => response.json())
            .then(data => {
                const id_album = "1GG6U2SSJPHO6XsFiBzxYv"
                fetch(`${url_album}/${id_album}/tracks`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${data.access_token}`
                    }
                }).then(response => response.json())
                    .then(data => {
                        const data_album = data.items.map(album => {
                            const ms = album.duration_ms;
                            const minutes = Math.floor(ms / 60000)
                            const seconds = ((ms % 60000) / 1000).toFixed(0)
                            const duration_formated = `${(minutes < 10 ? "0":"")}${minutes}:${seconds < 10 ? "0":""}${seconds}`
                            return { name: album.name, duration: duration_formated }
                        })
                        setSongsData(data_album)
                    })
            })
    }, [])

    return (
        <section>
            <h2>track list</h2>
            <div>
                {
                    songs.map((song, index) => <Song key={song.name} id={index + 1} duration={song.duration} artist="Tyler, The Creator" name_song={song.name} />)
                }
            </div>
        </section>
    )
}
