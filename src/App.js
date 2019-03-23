import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Logo from './Logo.js'
import TitleList from './components/TitleList'
import Hero from './components/Hero'
import SearchBox from './components/SearchBox'
import Navigation from './components/Navigation'
import UserProfile from './components/UserProfile'

import { loadMyMovieList } from './actions/index'

class App extends Component {
  componentDidMount() {
    this.props.loadMyMovieList()
  }

  render() {
    const { myMovieList } = this.props
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <SearchBox />
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" movies={this.props.searchResults} />
        {myMovieList && (
          <TitleList title="My Movies" movies={myMovieList.payload} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  myMovieList: state.myMovieList
})

export default connect(
  mapStateToProps,
  { loadMyMovieList }
)(App)
