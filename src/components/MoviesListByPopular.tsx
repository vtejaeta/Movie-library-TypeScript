import { useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const MoviesListByPopular: React.FC = () => {
  const [movies, setMovies] = useState<
    | {
        page: number
        results: []
        total_pages: number
      }
    | {}
  >({})
  const { searchMoviesByPopular } = useActions()
  const { data, error, loading } = useTypedSelector(
    (state) => state.moviesByPopular
  )

  console.log({data})

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
