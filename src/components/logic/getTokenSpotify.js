import { Buffer } from "buffer"

export default function getTokenSpotify() {
  const client_id = process.env.REACT_APP_CLIENT_ID
  const client_secret = process.env.REACT_APP_SECRET_ID
  const url_token = "https://accounts.spotify.com/api/token"

  // return a Promise with the Token to connect
  return fetch(url_token, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64")
    },
    body: "grant_type=client_credentials"
  }).then(response => response.json())
    .then(data => data.access_token)
}