import { SearchMoviesByNameActionType } from '../action-types/searchMoviesByName'
import { SearchMoviesByNameAction } from '../actions/searchMoviesByName'
import { MoviesState, initialState } from '../moviesState'

const searchMoviesByNameReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesByNameAction
): MoviesState => {
  switch (action.type) {
    case SearchMoviesByNameActionType.SEARCH_MOVIES_BY_NAME:
      return { loading: true, error: null, data: null }
    case SearchMoviesByNameActionType.SEARCH_MOVIES_BY_NAME_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchMoviesByNameActionType.SEARCH_MOVIES_BY_NAME_ERROR:
      return { loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

export default searchMoviesByNameReducer
