const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MY_MOVIE_LIST_LOADED': {
      return {
        ...state,
        payload: action.payload
      }
    }
    case 'SEARCH_RESULTS_LOADED': {
      return {
        ...state,
        payload: action.payload
      }
    }
    default:
      return state
  }
}
