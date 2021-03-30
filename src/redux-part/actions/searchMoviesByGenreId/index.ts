import { MoviesResultState } from "../../moviesState";

interface searchMoviesByGenreIdAction {
    type: 'search_movies_by_genre_id'
  }
  
  interface searchMoviesByGenreIdSuccessAction {
    type: 'search_movies_by_genre_id_success'
    payload: {
      page: number
      results: MoviesResultState[]
      total_pages: number
      total_results: number
    }
  }
  
  interface searchMoviesByGenreIdErrorAction {
    type: 'search_movies_by_genre_id_error'
    payload: string
  }
  
  export type SearchMoviesByGenreIdAction =
    | searchMoviesByGenreIdAction
    | searchMoviesByGenreIdSuccessAction
    | searchMoviesByGenreIdErrorAction
  