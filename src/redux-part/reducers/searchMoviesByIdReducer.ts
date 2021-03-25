import { SearchMoviesByIdActionType } from '../action-types/searchMoviesById'
import { SearchMoviesByIdAction } from '../actions/searchMoviesById'
import { MovieDetailsState, initialState } from '../moviesState'

const searchMoviesByIdReducer = (
  state: MovieDetailsState = initialState,
  action: SearchMoviesByIdAction
): MovieDetailsState => {
  switch (action.type) {
    case SearchMoviesByIdActionType.SEARCH_MOVIES_BY_ID:
      return { loading: true, error: null, data: null }
    case SearchMoviesByIdActionType.SEARCH_MOVIES_BY_ID_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchMoviesByIdActionType.SEARCH_MOVIES_BY_ID_ERROR:
      return { loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

export default searchMoviesByIdReducer
