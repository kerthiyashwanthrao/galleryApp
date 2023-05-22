// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {item, viewImage} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = item

  const selectImage = () => {
    viewImage(id, imageUrl, imageAltText)
  }

  return (
    <li key={id}>
      <button onClick={selectImage} type="button" className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
