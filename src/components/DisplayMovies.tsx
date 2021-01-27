import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { state } from '../redux-part/exports'
import MoviesCarousel from './MoviesCarousel'
import Header from './Header'
import Footer from './Footer'

interface DisplayMoviesProps {
  category: string
}

const DisplayMovies: React.FC<DisplayMoviesProps> = ({ category }) => {
  const [dataFromApi, setDataFromApi] = useState({})
  const [listOfMovies, setListOfMovies] = useState<{ [key: string]: any }[]>([])
  let { loading, error, data } = useTypedSelector(
    (state): state.MoviesState => {
      if (category === 'top-rated') {
        return state.moviesByTopRated
      }
      return state.moviesByPopular
    }
  )

  useEffect(() => {
    data && setDataFromApi(data)
    data && setListOfMovies(data.results)
  }, [data])

  const renderCarousel = () => {
    return listOfMovies.slice(0, 4).map((movie) => {
      let backdrop_path = movie.backdrop_path
      return (
        <figure key={Math.random()}>
          <img
            alt='movie-poster'
            src={`https://image.tmdb.org/t/p/original${movie && backdrop_path}`}
            className='movie-carousel-poster'
          />
        </figure>
      )
    })
  }

  return (
    <>
      <Header />
      {listOfMovies.length ? (
        <MoviesCarousel topFourMovies={listOfMovies.slice(0, 4)} />
      ) : (
        <h1>Loading</h1>
      )}
      <main></main>
      <Footer />
    </>
  )
}

export default DisplayMovies
