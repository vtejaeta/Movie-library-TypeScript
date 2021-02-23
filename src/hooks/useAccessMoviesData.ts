import { useTypedSelector } from './useTypedSelector'
import { state } from '../redux-part/exports'

const useAccessMoviesData = (category?: string) => {
  return useTypedSelector(
    (state): state.MoviesState => {
      if (category === 'top-rated') {
        return state.moviesByTopRated
      } else if (category === 'upcoming') {
        return state.moviesByUpComing
      }
      return state.moviesByPopular
    }
  )

  
}

export default useAccessMoviesData