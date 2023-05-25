import React from 'react'
import Song from './Song'

export default function ThirdSection({songs, artists_names}) {
    return (
        <section>
            <h2>track list</h2>
            <div>
                {
                    (songs !== undefined && artists_names !== undefined) ? songs.map((song, index) => <Song key={song.name} id={index + 1} duration={song.duration} artists_names={artists_names} name_song={song.name}/>) : ""
                }
            </div>
        </section>
    )
}
