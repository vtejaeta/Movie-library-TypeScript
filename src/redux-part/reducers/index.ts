import { combineReducers } from 'redux'
import searchMoviesByPopularReducer from './searchMoviesByPopularReducer'
import searchMoviesByTopRatedReducer from './searchMoviesByTopRatedReducer'

const reducers = combineReducers({
  moviesByPopular: searchMoviesByPopularReducer,
  moviesByTopRated: searchMoviesByTopRatedReducer,
})

export default reducers