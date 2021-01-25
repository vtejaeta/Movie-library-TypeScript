import { SearchMoviesByTopRatedActionType } from '../../action-types/searchMoviesByTopRated'
import { SearchMoviesByTopRatedAction } from '../../actions/searchMoviesByTopRated'
import { Dispatch } from 'redux'
import GetMovies from '../../../api/GetMovies'

export const searchMoviesByTopRated = (pageId: number) => {
  return async (dispatch: Dispatch<SearchMoviesByTopRatedAction>) => {
    dispatch({
      type: SearchMoviesByTopRatedActionType.SEARCH_MOVIES_BY_TOP_RATED,
    })

    try {
      const { data } = await GetMovies.get('/movie/top_rated', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: 'en-US',
          page: pageId,
        },
      })

      dispatch({
        type: SearchMoviesByTopRatedActionType.SEARCH_MOVIES_BY_TOP_RATED_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SearchMoviesByTopRatedActionType.SEARCH_MOVIES_BY_TOP_RATED_ERROR,
        payload: error.message,
      })
    }
  }
}
