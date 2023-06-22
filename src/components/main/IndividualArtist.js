export default function IndividualArtist({id, name, image}) {
  return(
    <div className="card-artist">
      <div className="image-container">
        <img src={image} />
      </div>
      <h2>{name}</h2>
    </div>
  )
}