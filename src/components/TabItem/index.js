import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const click = () => {
    clickTabItem(tabId)
  }
  const activeTab = isActive ? 'active' : ''

  return (
    <li className={`tab ${activeTab}`} onClick={click}>
      <button type="button" className="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
