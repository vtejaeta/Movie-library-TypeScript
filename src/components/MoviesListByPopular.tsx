import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import DisplayMovies from './DisplayMovies'

const MoviesListByPopular: React.FC = () => {
  const { searchMoviesByPopular } = useActions()

  useEffect(() => {
    searchMoviesByPopular(1)
  }, [searchMoviesByPopular])

  return <DisplayMovies/>
}

export default MoviesListByPopular
