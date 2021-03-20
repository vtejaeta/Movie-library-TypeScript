interface searchMoviesByIdAction {
  type: "search_movies_by_id";
}

interface searchMoviesByIdSuccessAction {
  type: "search_movies_by_id_success";
  payload: {
    genres: { id: number; name: string }[];
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    runtime: number;
    videos: {
      results: {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
      }[];
    };
  };
}

interface searchMoviesByIdErrorAction {
  type: "search_movies_by_id_error";
  payload: string;
}

export type SearchMoviesByIdAction =
  | searchMoviesByIdAction
  | searchMoviesByIdSuccessAction
  | searchMoviesByIdErrorAction;
