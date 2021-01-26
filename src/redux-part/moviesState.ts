export interface MoviesState {
  loading: boolean
  error: string | null
  data: {}
}
export const initialState = {
  loading: false,
  error: null,
  data: {},
}
