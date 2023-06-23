export default function IndividualArtist({setIdAlbum, id, name, image}) {
  const handleIdAlbum = () => {
    setIdAlbum(id)
  }
  
  return(
    <div onClick={handleIdAlbum} className="card-artist">
      <img src={image} />
      <h2>{name}</h2>
    </div>
  )
}