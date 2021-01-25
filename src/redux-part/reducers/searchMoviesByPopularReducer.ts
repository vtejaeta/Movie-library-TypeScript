interface MoviesState {
  loading: boolean
  error: string | null
  data: {}[]
}

interface searchMoviesByPopularAction {
  type: 'search_movies_by_popular'
}

interface searchMoviesByPopularSuccessAction {
  type: 'search_movies_by_popular_success'
  payload: {}[]
}

interface searchMoviesByPopularErrorAction {
  type: 'search_movies_by_popular_error'
  payload: string
}

type Action =
  | searchMoviesByPopularAction
  | searchMoviesByPopularSuccessAction
  | searchMoviesByPopularErrorAction

enum ActionType {
  SEARCH_MOVIES_BY_POPULAR = 'search_movies_by_popular',
  SEARCH_MOVIES_BY_POPULAR_SUCCESS = 'search_movies_by_popular_success',
  SEARCH_MOVIES_BY_POPULAR_ERROR = 'search_movies_by_popular_error',
}

const searchMoviesByPopularReducer = (
  state: MoviesState,
  action: Action
): MoviesState => {
  switch (action.type) {
    case ActionType.SEARCH_MOVIES_BY_POPULAR:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_MOVIES_BY_POPULAR_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_MOVIES_BY_POPULAR_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default searchMoviesByPopularReducer
