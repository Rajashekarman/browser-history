import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  render() {
    const {HistoryList} = this.props
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
        />

        <input type="search" />
        <img
          src="
https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
        />
        <ul>
          {HistoryList.map(eachSuggetion => (
            <SuggestionItem
              suggestionDetails={eachSuggetion}
              key={eachSuggetion.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
