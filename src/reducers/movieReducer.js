const initialState = {}
import { MY_MOVIE_LIST_LOADED } from '../actions/types'

export default function(state = initialState, action) {
  switch (action.type) {
    case MY_MOVIE_LIST_LOADED: {
      return {
        ...state,
        payload: action.payload
      }
    }
    default:
      return state
  }
}
