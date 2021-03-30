import { MoviesResultState } from "../../moviesState";

interface searchMoviesByPopularAction {
  type: 'search_movies_by_popular'
}

interface searchMoviesByPopularSuccessAction {
  type: 'search_movies_by_popular_success'
  payload: {
    page: number
    results: MoviesResultState[]
    total_pages: number
    total_results: number
  }
}

interface searchMoviesByPopularErrorAction {
  type: 'search_movies_by_popular_error'
  payload: string
}

export type SearchMoviesByPopularAction =
  | searchMoviesByPopularAction
  | searchMoviesByPopularSuccessAction
  | searchMoviesByPopularErrorAction
