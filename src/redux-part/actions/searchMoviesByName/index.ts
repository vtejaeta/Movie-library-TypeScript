import { MoviesResultState } from "../../moviesState";

interface searchMoviesByNameAction {
    type: 'search_movies_by_name'
  }
  
  interface searchMoviesByNameSuccessAction {
    type: 'search_movies_by_name_success'
    payload: {
      page: number
      results: MoviesResultState[]
      total_pages: number
      total_results: number
    }
  }
  
  interface searchMoviesByNameErrorAction {
    type: 'search_movies_by_name_error'
    payload: string
  }
  
  export type SearchMoviesByNameAction =
    | searchMoviesByNameAction
    | searchMoviesByNameSuccessAction
    | searchMoviesByNameErrorAction
  