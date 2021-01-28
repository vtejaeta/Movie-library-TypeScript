import { combineReducers } from 'redux'
import searchMoviesByPopularReducer from './searchMoviesByPopularReducer'
import searchMoviesByTopRatedReducer from './searchMoviesByTopRatedReducer'
import searchMoviesByUpComingReducer from './searchMoviesByUpComingReducer'

const reducers = combineReducers({
  moviesByPopular: searchMoviesByPopularReducer,
  moviesByTopRated: searchMoviesByTopRatedReducer,
  moviesByUpComing: searchMoviesByUpComingReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
