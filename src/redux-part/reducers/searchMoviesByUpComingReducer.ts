import { SearchMoviesByUpComingActionType } from '../action-types/searchMoviesByUpComing'
import { SearchMoviesByUpComingAction } from '../actions/searchMoviesByUpComing'
import { MoviesState, initialState } from '../moviesState'

const searchMoviesByUpComingReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesByUpComingAction
): MoviesState => {
  switch (action.type) {
    case SearchMoviesByUpComingActionType.SEARCH_MOVIES_BY_UPCOMING:
      return { loading: true, error: null, data: null }
    case SearchMoviesByUpComingActionType.SEARCH_MOVIES_BY_UPCOMING_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchMoviesByUpComingActionType.SEARCH_MOVIES_BY_UPCOMING_ERROR:
      return { loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

export default searchMoviesByUpComingReducer
