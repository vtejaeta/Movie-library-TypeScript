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
  } | null
}