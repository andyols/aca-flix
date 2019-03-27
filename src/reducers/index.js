import { combineReducers } from 'redux'
import { loadMyMovieList, loadSearch } from './Reducers'

export default combineReducers({
  myMovieList: loadMyMovieList,
  searchResults: loadSearch
})
