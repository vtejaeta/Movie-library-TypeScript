export interface MoviesState {
  loading: boolean
  error: string | null
  data: { page: number; results: []; total_pages: number } | {}
}
export const initialState = {
  loading: false,
  error: null,
  data: {},
}
