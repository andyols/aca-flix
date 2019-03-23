import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadSearch } from '../actions/index'

class SearchBox extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div id="search" className="Search">
        <input
          onKeyUp={e => {
            /* this is so th search will only be done on enter key */
            if (
              this.props.loadSearch &&
              e.key === 'Enter' &&
              this.state.searchTerm
            ) {
              this.props.loadSearch(this.state.searchTerm)
            }
          }}
          onChange={this.handleChange}
          type="search"
          placeholder="Search for a title..."
          name="searchTerm"
        />
      </div>
    )
  }
}

export default connect(
  null,
  { loadSearch }
)(SearchBox)
