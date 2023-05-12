const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = suggestionDetails
  return (
    <div>
      <li>
        <p>{timeAccessed}</p>
        <p>{title}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
        />
        <img src={logoUrl} alt="domain logo" />
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
        <p>{domainUrl}</p>
        <button>delete</button>
      </li>
    </div>
  )
}

export default SuggestionItem
