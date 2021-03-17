import { SearchMoviesByNameActionType } from '../../action-types/searchMoviesByName'
import { SearchMoviesByNameAction } from '../../actions/searchMoviesByName'
import { Dispatch } from 'redux'
import GetMovies from '../../../api/GetMovies'

export const searchMoviesByName = (query:string,pageId: number) => {
  return async (dispatch: Dispatch<SearchMoviesByNameAction>) => {
    dispatch({
      type: SearchMoviesByNameActionType.SEARCH_MOVIES_BY_NAME,
    })

    try {
      const { data } = await GetMovies.get('/search/movie', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query:query,
          page: pageId,
        },
      })

      dispatch({
        type: SearchMoviesByNameActionType.SEARCH_MOVIES_BY_NAME_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SearchMoviesByNameActionType.SEARCH_MOVIES_BY_NAME_ERROR,
        payload: error.message,
      })
    }
  }
}
