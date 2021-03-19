interface searchMoviesByIdAction {
  type: "search_movies_by_id";
}

interface searchMoviesByIdSuccessAction {
  type: "search_movies_by_id_success";
  payload: {
    genres: { id: Number; name: String }[];
    id: Number;
    original_title: String;
    overview: String;
    poster_path: String;
    release_date: String;
    runtime: Number;
    videos: {
      results: {
        id: String;
        iso_639_1: String;
        iso_3166_1: String;
        key: String;
        name: String;
        site: String;
        size: Number;
        type: String;
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
