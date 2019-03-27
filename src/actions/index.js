import axios from 'axios'
import { API_KEY } from '../config/keys'
import { MY_MOVIE_LIST_LOADED, SEARCH_RESULTS_LOADED } from './types'

export const myMovieListLoaded = movies => {
  return {
    type: MY_MOVIE_LIST_LOADED,
    payload: movies
  }
}

export const loadMyMovieList = () => dispatch => {
  axios.get('/movies').then(res => dispatch(myMovieListLoaded(res.data)))
}

export const searchLoaded = results => {
  return {
    type: SEARCH_RESULTS_LOADED,
    payload: results
  }
}

export const loadSearch = searchTerm => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=${API_KEY}`
    )
    .then(res => dispatch(searchLoaded(res.data.results)))
    .catch(err => console.log(err))
}

export const saveMyMovie = movie => dispatch => {
  axios
    .post('/movies', movie)
    .then(res => dispatch(loadMyMovieList()))
    .catch(err => console.log(err))
}

export const removeMyMovie = id => dispatch => {
  axios.delete(`/movies/${id}`).then(res => dispatch(loadMyMovieList()))
}
