interface searchMoviesByTopRatedAction {
    type: 'search_movies_by_top_rated'
  }
  
  interface searchMoviesByTopRatedSuccessAction {
    type: 'search_movies_by_top_rated_success'
    payload: {}[]
  }
  
  interface searchMoviesByTopRatedErrorAction {
    type: 'search_movies_by_top_rated_error'
    payload: string
  }
  
  export type SearchMoviesByTopRatedAction =
    | searchMoviesByTopRatedAction
    | searchMoviesByTopRatedSuccessAction
    | searchMoviesByTopRatedErrorAction
  