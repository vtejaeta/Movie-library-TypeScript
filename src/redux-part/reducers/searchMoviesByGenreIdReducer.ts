import { SearchMoviesByGenreIdActionType } from '../action-types/searchMoviesByGenreId'
import { SearchMoviesByGenreIdAction } from '../actions/searchMoviesByGenreId'
import { MoviesState, initialState } from '../moviesState'

const searchMoviesByGenreIdReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesByGenreIdAction
): MoviesState => {
  switch (action.type) {
    case SearchMoviesByGenreIdActionType.SEARCH_MOVIES_BY_GENRE_ID:
      return { loading: true, error: null, data: null }
    case SearchMoviesByGenreIdActionType.SEARCH_MOVIES_BY_GENRE_ID_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchMoviesByGenreIdActionType.SEARCH_MOVIES_BY_GENRE_ID_ERROR:
      return { loading: false, error: action.payload, data: null }
    default:
      return state
  }
}

export default searchMoviesByGenreIdReducer
