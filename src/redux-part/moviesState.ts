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
