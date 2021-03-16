import { combineReducers } from "redux";
import searchMoviesByGenreIdReducer from "./searchMoviesByGenreIdReducer";
import searchMoviesByPopularReducer from "./searchMoviesByPopularReducer";
import searchMoviesByTopRatedReducer from "./searchMoviesByTopRatedReducer";
import searchMoviesByUpComingReducer from "./searchMoviesByUpComingReducer";

const reducers = combineReducers({
  moviesByPopular: searchMoviesByPopularReducer,
  moviesByTopRated: searchMoviesByTopRatedReducer,
  moviesByUpComing: searchMoviesByUpComingReducer,
  moviesByGenre: searchMoviesByGenreIdReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
