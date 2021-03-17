import { combineReducers } from "redux";
import searchMoviesByGenreIdReducer from "./searchMoviesByGenreIdReducer";
import searchMoviesByNameReducer from "./searchMoviesByNameReducer";
import searchMoviesByPopularReducer from "./searchMoviesByPopularReducer";
import searchMoviesByTopRatedReducer from "./searchMoviesByTopRatedReducer";
import searchMoviesByUpComingReducer from "./searchMoviesByUpComingReducer";

const reducers = combineReducers({
  moviesByPopular: searchMoviesByPopularReducer,
  moviesByTopRated: searchMoviesByTopRatedReducer,
  moviesByUpComing: searchMoviesByUpComingReducer,
  moviesByName:searchMoviesByNameReducer,
  moviesByGenre: searchMoviesByGenreIdReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
