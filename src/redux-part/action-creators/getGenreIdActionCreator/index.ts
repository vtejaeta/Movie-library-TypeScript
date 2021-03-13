import { GetGenreIdActionType } from '../../action-types/getGenreId'
import { GetGenreIdAction } from '../../actions/getGenreId'
import { Dispatch } from 'redux'
import GetMovies from '../../../api/GetMovies'

export const getGenreId = () => {
  return async (dispatch: Dispatch<GetGenreIdAction>) => {
    dispatch({
      type: GetGenreIdActionType.GET_GENRE_ID,
    })

    try {
      const { data } = await GetMovies.get('/genre/movie/list', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })

      dispatch({
        type: GetGenreIdActionType.GET_GENRE_ID_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: GetGenreIdActionType.GET_GENRE_ID_SUCCESS,
        payload: error.message,
      })
    }
  }
}
