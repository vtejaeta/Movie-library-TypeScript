import axios from 'axios'
import { SearchMoviesByPopularActionType } from '../../action-types/searchMoviesByPopular'
import { SearchMoviesByPopularAction } from '../../actions/searchMoviesByPopular'

const searchMoviesByPopular = () => {
  return async (dispatch: any) => {
    dispatch({
      type: SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR,
    })

    try {
        const {data} = await axios.
    } catch (error) {
      dispatch({
        type: SearchMoviesByPopularActionType.SEARCH_MOVIES_BY_POPULAR_ERROR,
        payload: error.message,
      })
    }
  }
}
