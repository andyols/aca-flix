import { MY_MOVIE_LIST_LOADED, SEARCH_RESULTS_LOADED } from '../actions/types'

export const loadMyMovieList = (state = [], action) => {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED: {
      return action.payload
    }
    default:
      return state
  }
}

export const loadSearch = (state = [], action) => {
  switch (action.type) {
    case SEARCH_RESULTS_LOADED: {
      return action.payload
    }
    default:
      return state
  }
}
