import React, {useState, useEffect} from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Background from "./components/Background";
import getAlbum from "./components/logic/getAlbum";

export default function App() {
  const [id_album, setIdAlbum] = useState("1GG6U2SSJPHO6XsFiBzxYv")
  const [album_data, setAlbumData] = useState({})

  useEffect(() => {
    getAlbum(id_album).then(album => setAlbumData(album))
  }, [id_album])

  console.log(album_data)
  return (
    <div className="App">
      <Background image_background={album_data.image_album}/>
      <Header />
      <Main songs={album_data.tracks} artists_names={album_data.artist_names} date_release={album_data.date} album_name={album_data.name_album} cover_image={album_data.image_album} />
      <Footer />
    </div>
  );
}
