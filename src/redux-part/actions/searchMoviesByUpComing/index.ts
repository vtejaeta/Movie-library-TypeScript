interface searchMoviesByUpComingAction {
    type: 'search_movies_by_upcoming'
  }
  
  interface searchMoviesByUpComingSuccessAction {
    type: 'search_movies_by_upcoming_success'
    payload: {
      page: number
      results: []
      total_pages: number
      total_results: number
    }
  }
  
  interface searchMoviesByUpComingErrorAction {
    type: 'search_movies_by_upcoming_error'
    payload: string
  }
  
  export type SearchMoviesByUpComingAction =
    | searchMoviesByUpComingAction
    | searchMoviesByUpComingSuccessAction
    | searchMoviesByUpComingErrorAction
  