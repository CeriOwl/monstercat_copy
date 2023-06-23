export default function IndividualArtist({setSelectingAlbums, setIdAlbum, id, name, image}) {
  const handleIdAlbum = () => {
    setIdAlbum(id)
    setSelectingAlbums(1)
  }
  
  return(
    <div onClick={handleIdAlbum} className="card-artist">
      <img src={image} />
      <h2>{name}</h2>
    </div>
  )
}