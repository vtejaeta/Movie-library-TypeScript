import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  searchMoviesByPopular,
  searchMoviesByTopRated,
  searchMoviesByUpComing,
  searchMoviesByGenreId,
  searchMoviesByName,
} from '../redux-part/exports'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    {
      searchMoviesByPopular,
      searchMoviesByTopRated,
      searchMoviesByUpComing,
      searchMoviesByGenreId,
      searchMoviesByName,
    },
    dispatch
  )
}
