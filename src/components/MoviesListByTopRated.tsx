import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import DisplayMovies from './DisplayMovies'

const MoviesListByTopRated: React.FC = () => {
  const { searchMoviesByTopRated } = useActions()

  useEffect(() => {
    searchMoviesByTopRated(1)
  }, [searchMoviesByTopRated])

  return <DisplayMovies category='top-rated'/>
}

export default MoviesListByTopRated
