import { SearchMoviesByIdActionType } from '../../action-types/searchMoviesById'
import { SearchMoviesByIdAction } from '../../actions/searchMoviesById'
import { Dispatch } from 'redux'
import GetMovies from '../../../api/GetMovies'

export const searchMoviesById = (id: number) => {
  return async (dispatch: Dispatch<SearchMoviesByIdAction>) => {
    dispatch({
      type: SearchMoviesByIdActionType.SEARCH_MOVIES_BY_ID,
    })

    try {
      const { data } = await GetMovies.get(`/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          append_to_response: "videos",
          language: "en-US",
        },
      })

      dispatch({
        type: SearchMoviesByIdActionType.SEARCH_MOVIES_BY_ID_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SearchMoviesByIdActionType.SEARCH_MOVIES_BY_ID_ERROR,
        payload: error.message,
      })
    }
  }
}
