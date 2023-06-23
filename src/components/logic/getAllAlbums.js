import getTokenSpotify from "./getTokenSpotify"

export default function getAllAlbums(id) {
    const url = `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album`
    return searchAlbums(url)
}

const searchAlbums = url => {
    return getTokenSpotify().then(token => {
        return fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => getAllData(data))
    })
}

const getAllData = data => {
    return data.items.map(album => {
        return {
            name: album.name,
            image: album.images[1].url,
            id: album.id
        }
    })
}