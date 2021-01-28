import { SearchMoviesByUpComingActionType } from '../../action-types/searchMoviesByUpComing'
import { SearchMoviesByUpComingAction } from '../../actions/searchMoviesByUpComing'
import { Dispatch } from 'redux'
import GetMovies from '../../../api/GetMovies'

export const searchMoviesByUpComing = (pageId: number) => {
  return async (dispatch: Dispatch<SearchMoviesByUpComingAction>) => {
    dispatch({
      type: SearchMoviesByUpComingActionType.SEARCH_MOVIES_BY_UPCOMING,
    })

    try {
      const { data } = await GetMovies.get('/movie/upcoming', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: 'en-US',
          page: pageId,
        },
      })

      dispatch({
        type: SearchMoviesByUpComingActionType.SEARCH_MOVIES_BY_UPCOMING_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SearchMoviesByUpComingActionType.SEARCH_MOVIES_BY_UPCOMING_ERROR,
        payload: error.message,
      })
    }
  }
}
