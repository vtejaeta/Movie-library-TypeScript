import { useDispatch,useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions'

const MoviesListByPopular: React.FC = () => {
  const [movies, setMovies] = useState<{
    page: number
    results: []
    total_pages: number
  } | {}>({})
  const { searchMoviesByTopRated, searchMoviesByPopular } = useActions()
  const {data,error,loading} = useSelector(state => state.moviesByPopular)

  useEffect(() => {
    searchMoviesByPopular(1)
  }, [])

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default MoviesListByPopular
