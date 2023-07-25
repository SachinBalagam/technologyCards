// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, className, imgUrl} = cardsList
  return (
    <li className={`card ${className}`}>
      <h1 className="titles">{title}</h1>
      <p className="descriptions">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
