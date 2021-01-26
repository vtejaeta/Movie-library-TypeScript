interface searchMoviesByTopRatedAction {
    type: 'search_movies_by_top_rated'
  }
  
  interface searchMoviesByTopRatedSuccessAction {
    type: 'search_movies_by_top_rated_success'
    payload: { page: number; results: []; total_pages: number }
  }
  
  interface searchMoviesByTopRatedErrorAction {
    type: 'search_movies_by_top_rated_error'
    payload: string
  }
  
  export type SearchMoviesByTopRatedAction =
    | searchMoviesByTopRatedAction
    | searchMoviesByTopRatedSuccessAction
    | searchMoviesByTopRatedErrorAction
  