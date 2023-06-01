export default function IndividualArtist({id, name, image}) {
  return(
    <div className="card-artist">
      <div>
        <img src={image} />
      </div>
    </div>
  )
}