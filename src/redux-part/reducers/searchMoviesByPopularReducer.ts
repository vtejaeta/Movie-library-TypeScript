import { SearchMoviesByPopularActionType } from '../action-types/searchMoviesByPopular'
import { SearchMoviesByPopularAction } from '../actions/searchMoviesByPopular'
import { MoviesState, initialState } from '../moviesState'

const searchMoviesByPopularReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesByPopularAction
): MoviesState => {
  switch (action.type) {
    case SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR:
      return { loading: true, error: null, data: null }
    case SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR_ERROR:
      return { loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

export default searchMoviesByPopularReducer
