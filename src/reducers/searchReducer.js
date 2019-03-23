import { LOAD_SEARCH, SEARCH_RESULTS_LOADED } from '../actions/types'

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCH: {
      return {
        ...state,
        payload: action.payload
      }
    }
    case SEARCH_RESULTS_LOADED: {
      return {
        ...state,
        payload: action.payload
      }
    }
    default:
      return state
  }
}
