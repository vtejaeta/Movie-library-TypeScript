import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import DisplayMovies from './DisplayMovies'

const MoviesListByUpComing: React.FC = () => {
  const { searchMoviesByUpComing } = useActions()

  useEffect(() => {
    searchMoviesByUpComing(1)
  }, [searchMoviesByUpComing])

  return <DisplayMovies category='upcoming'/>
}

export default MoviesListByUpComing
