import { SearchMoviesByGenreIdActionType } from '../../action-types/searchMoviesByGenreId'
import { SearchMoviesByGenreIdAction } from '../../actions/searchMoviesByGenreId'
import { Dispatch } from 'redux'
import GetMovies from '../../../api/GetMovies'

export const searchMoviesByGenreId = (genreId:number,pageId: number) => {
  return async (dispatch: Dispatch<SearchMoviesByGenreIdAction>) => {
    dispatch({
      type: SearchMoviesByGenreIdActionType.SEARCH_MOVIES_BY_GENRE_ID,
    })

    try {
      const { data } = await GetMovies.get('/discover/movie', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          with_genres: genreId,
          page: pageId,
        },
      })

      dispatch({
        type: SearchMoviesByGenreIdActionType.SEARCH_MOVIES_BY_GENRE_ID_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SearchMoviesByGenreIdActionType.SEARCH_MOVIES_BY_GENRE_ID_ERROR,
        payload: error.message,
      })
    }
  }
}
