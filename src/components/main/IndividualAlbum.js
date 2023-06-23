export default function IndividualArtist({handleNotifications, clearInput, setSelectingAlbums, switchElements, setIdAlbum, id, name, image}) {
    const handleIdAlbum = () => {
      clearInput()
      setIdAlbum(id)
      handleNotifications("existence")
      switchElements(false)
      setSelectingAlbums(0)
    }
    
    return(
      <div onClick={handleIdAlbum} className="card-album">
        <img src={image} />
        <h2>{name}</h2>
      </div>
    )
  }