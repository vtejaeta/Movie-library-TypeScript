import { useTypedSelector } from './useTypedSelector'
import { state } from '../redux-part/exports'
import { genreArray } from '../utils/genresArray';

const useAccessMoviesData = (category?: string) => {
  return useTypedSelector(
    (state): state.MoviesState => {
      if (category === 'top-rated') {
        return state.moviesByTopRated
      }else if (category === 'popular') {
        return state.moviesByPopular
      }else if (category === 'upcoming') {
        return state.moviesByUpComing
      }else if(category && genreArray.includes(category)){
        return state.moviesByGenre
      }else {
        return state.moviesByName
      }
    }
  )

  
}

export default useAccessMoviesData