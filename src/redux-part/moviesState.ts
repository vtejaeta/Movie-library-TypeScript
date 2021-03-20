export interface MoviesState {
  loading: boolean
  error: string | null
  data: {
    page: number
    results: {}[]
    total_pages: number
    total_results: number
  } | null
}
export const initialState = {
  loading: false,
  error: null,
  data: null,
}

export interface MovieState{
  loading: boolean
  error: string | null
  data:{
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
  } | null
}