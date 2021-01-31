import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { state } from '../redux-part/exports'
import MoviesCarousel from './MoviesCarousel'
import Header from './Header'
import Footer from './Footer'
import LoadingSpinner from './LoadingSpinner'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../styles/DisplayMovies.css'
import { RouteComponentProps } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import ErrorComponent from './ErrorComponent'
import Pagination from './Pagination'

interface MatchParam {
  category?: string
}

const DisplayMovies: React.FC<RouteComponentProps<MatchParam>> = ({
  match,history
}) => {
  const { category } = match.params
  const [errorParam, setErrorParam] = useState(false)
  const currentPage = history.location.search
  ? parseInt(history.location.search.slice(6))
  : 1;
  const {
    searchMoviesByPopular,
    searchMoviesByTopRated,
    searchMoviesByUpComing,
  } = useActions()
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
    if (category === 'popular') {
      searchMoviesByPopular(1)
      setErrorParam(false)
    } else if (category === 'top-rated') {
      setErrorParam(false)
      searchMoviesByTopRated(1)
    } else if (category === 'upcoming') {
      searchMoviesByUpComing(1)
      setErrorParam(false)
    } else {
      setErrorParam(true)
    }
    // eslint-disable-next-line
  }, [category])

  const renderMovies = () => {
    return data?.results.map((movie: any) => {
      return (
        <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
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
      {!errorParam ? (
        data?.results.length ? (
          <MoviesCarousel topFourMovies={data?.results.slice(0, 4)} />
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <></>
      )}
      {!errorParam && (
        <main>
          <Container>
            {loading ? <LoadingSpinner /> : <></>}
            {category ? (
              <h1 className='ml-4 mt-4'>{category.toUpperCase()} Movies</h1>
            ) : (
              <></>
            )}
            {data?.results ? (
              <Row className='p-5'>{renderMovies()}</Row>
            ) : (
              <></>
            )}
            <Pagination totalPages={data?.total_pages} currentPage={currentPage}/>
          </Container>
        </main>
      )}
      {errorParam && <ErrorComponent />}
    </>
  )
}

export default DisplayMovies
