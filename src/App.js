import React, {useState, useEffect} from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Background from "./components/Background";
import getData from "./components/logic/connectToSpotify";

export default function App() {
  const [id_album, setIdAlbum] = useState("1GG6U2SSJPHO6XsFiBzxYv")
  const [album_data, setAlbumData] = useState({})
  const [tracks_data, setTracksData] = useState([])

  useEffect(() => {
    getData(id_album).then(data => {
      data.album_info.then(data => setAlbumData(data))
      data.tracks.then(data => setTracksData(data))
    })
  }, [id_album])

  console.log(album_data)

  return (
    <div className="App">
      <Background image_background={album_data.image_album}/>
      <Header />
      <Main songs={tracks_data} artists_names={album_data.artist_names} date_release={album_data.date} album_name={album_data.name_album} cover_image={album_data.image_album} />
      <Footer />
    </div>
  );
}
