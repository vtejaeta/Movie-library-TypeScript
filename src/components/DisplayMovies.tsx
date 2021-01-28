import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { state } from '../redux-part/exports'
import MoviesCarousel from './MoviesCarousel'
import Header from './Header'
import Footer from './Footer'
import LoadingSpinner from './LoadingSpinner'
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap'
import MovieCard from './MovieCard'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css'
import '../styles/DisplayMovies.css'

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
      } else if (category === 'upcoming') {
        return state.moviesByUpComing
      }
      return state.moviesByPopular
    }
  )

  useEffect(() => {
    data && setDataFromApi(data)
    data && setListOfMovies(data.results)
  }, [data])

  const renderMovies = () => {
    return listOfMovies.map((movie) => {
      return (
        <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
          {/* <MovieCard movie={movie} /> */}
          <Card className='my-3'>
            <LazyLoadImage
              alt={movie.original_title}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </Card>
        </Col>
      )
    })
  }

  return (
    <>
      <Header />
      {listOfMovies.length ? (
        <MoviesCarousel topFourMovies={listOfMovies.slice(0, 4)} />
      ) : (
        <LoadingSpinner />
      )}
      <main>
        <Container>
          {loading ? <LoadingSpinner /> : <></>}
          <h1 className='ml-5 mt-4'>{category.toUpperCase()} Movies</h1>
          {listOfMovies ? <Row className='p-5'>{renderMovies()}</Row> : <></>}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default DisplayMovies
