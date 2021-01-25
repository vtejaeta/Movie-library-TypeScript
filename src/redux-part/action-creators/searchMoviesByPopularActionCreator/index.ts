import { SearchMoviesByPopularActionType } from '../../action-types/searchMoviesByPopular'
import { SearchMoviesByPopularAction } from '../../actions/searchMoviesByPopular'
import GetMovies from '../../../api/GetMovies'

export const searchMoviesByPopular = (pageId: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR,
    })

    try {
      const { data } = await GetMovies.get('/movie/popular', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: 'en-US',
          page: pageId,
        },
      })

      dispatch({
        type: SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR_ERROR,
        payload: error.message,
      })
    }
  }
}
