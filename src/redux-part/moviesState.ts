export interface MoviesState {
  loading: boolean;
  error: string | null;
  data: {
    page: number;
    results: MoviesResultState[];
    total_pages: number;
    total_results: number;
  } | null;
}

export type MoviesResultState = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const initialState = {
  loading: false,
  error: null,
  data: null,
};

export interface MovieDetailsState {
  loading: boolean;
  error: string | null;
  data: MovieDetailsResultState | null;
}

export type MovieDetailsResultState = {
  genres: {
    id: number;
    name: string;
  }[];
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
