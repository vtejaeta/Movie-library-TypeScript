import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { state } from '../redux-part/exports'
import MoviesCarousel from './MoviesCarousel'
import Header from './Header'
import Footer from './Footer'
import LoadingSpinner from './LoadingSpinner'
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap'
import MovieCard from './MovieCard'

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
        <Col>
        <MovieCard movie={movie}/>
          <Card key={Math.random()}>
            <Card.Img
              variant='top'
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
        {loading ? <LoadingSpinner /> : <></>}
        {listOfMovies ? (
          <Row>
            <Col xs={6} md={4}>
              <CardGroup>{renderMovies()}</CardGroup>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </main>
      <Footer />
    </>
  )
}

export default DisplayMovies
