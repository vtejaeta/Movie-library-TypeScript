import { GetGenreIdActionType } from "../action-types/getGenreId";
import { GetGenreIdAction } from "../actions/getGenreId";
import { GetGenreIdState, initialState } from "../moviesState";


const getGenreIdReducer = (
  state: GetGenreIdState = initialState,
  action: GetGenreIdAction
): GetGenreIdState => {
  switch (action.type) {
    case GetGenreIdActionType.GET_GENRE_ID:
      return { loading: true, error: null, data: null };
    case GetGenreIdActionType.GET_GENRE_ID_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case GetGenreIdActionType.GET_GENRE_ID_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default getGenreIdReducer;
