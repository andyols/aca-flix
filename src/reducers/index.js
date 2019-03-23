import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  myMovieList: movieReducer,
  searchResults: searchReducer
})
