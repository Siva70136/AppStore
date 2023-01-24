// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {imageUrl, appName} = appsList

  return (
    <li className="item">
      <img src={imageUrl} alt={appName} className="icon" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
