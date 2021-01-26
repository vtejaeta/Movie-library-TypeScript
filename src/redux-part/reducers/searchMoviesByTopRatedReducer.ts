import { SearchMoviesByTopRatedActionType } from '../action-types/searchMoviesByTopRated'
import { SearchMoviesByTopRatedAction } from '../actions/searchMoviesByTopRated'
import { MoviesState, initialState } from '../moviesState'

const searchMoviesByTopRatedReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesByTopRatedAction
): MoviesState => {
  switch (action.type) {
    case SearchMoviesByTopRatedActionType.SEARCH_MOVIES_BY_TOP_RATED:
      return { loading: true, error: null, data: null }
    case SearchMoviesByTopRatedActionType.SEARCH_MOVIES_BY_TOP_RATED_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchMoviesByTopRatedActionType.SEARCH_MOVIES_BY_TOP_RATED_ERROR:
      return { loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

export default searchMoviesByTopRatedReducer
