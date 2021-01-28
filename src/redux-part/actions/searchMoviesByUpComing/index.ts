interface searchMoviesByUpComingAction {
    type: 'search_movies_by_popular'
  }
  
  interface searchMoviesByUpComingSuccessAction {
    type: 'search_movies_by_popular_success'
    payload: {
      page: number
      results: []
      total_pages: number
      total_results: number
    }
  }
  
  interface searchMoviesByUpComingErrorAction {
    type: 'search_movies_by_popular_error'
    payload: string
  }
  
  export type SearchMoviesByUpComingAction =
    | searchMoviesByUpComingAction
    | searchMoviesByUpComingSuccessAction
    | searchMoviesByUpComingErrorAction
  