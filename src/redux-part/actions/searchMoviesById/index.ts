import { MovieDetailsResultState } from "../../moviesState";

interface searchMoviesByIdAction {
  type: "search_movies_by_id";
}

interface searchMoviesByIdSuccessAction {
  type: "search_movies_by_id_success";
  payload: MovieDetailsResultState;
}

interface searchMoviesByIdErrorAction {
  type: "search_movies_by_id_error";
  payload: string;
}

export type SearchMoviesByIdAction =
  | searchMoviesByIdAction
  | searchMoviesByIdSuccessAction
  | searchMoviesByIdErrorAction;
