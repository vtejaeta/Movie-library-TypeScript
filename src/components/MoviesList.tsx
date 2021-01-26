import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions'

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState({})
  const { searchMoviesByTopRated, searchMoviesByPopular } = useActions()
  
  useEffect(() => {
      searchMoviesByPopular(1)
  }, [])

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default MoviesList
