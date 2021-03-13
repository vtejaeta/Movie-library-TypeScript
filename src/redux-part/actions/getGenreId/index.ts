interface getGenreIdAction {
  type: "get_genre_id";
}

interface getGenreIdSuccessAction {
  type: "get_genre_id_success";
  payload: {
    genres: { id: number; name: String }[];
  };
}

interface getGenreIdErrorAction {
  type: "get_genre_id_error";
  payload: string;
}

export type GetGenreIdAction =
  | getGenreIdAction
  | getGenreIdSuccessAction
  | getGenreIdErrorAction;
