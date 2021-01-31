import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { state } from '../redux-part/exports'
import MoviesCarousel from './MoviesCarousel'
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
  match,
  history,
}) => {
  const { category } = match.params
  const [errorParam, setErrorParam] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
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
    setCurrentPage(
      history.location.search ? Number(history.location.search.slice(6)) : 1
    )
      if (category === 'popular') {
        searchMoviesByPopular(currentPage)
        setErrorParam(false)
      } else if (category === 'top-rated') {
        setErrorParam(false)
        searchMoviesByTopRated(currentPage)
      } else if (category === 'upcoming') {
        searchMoviesByUpComing(currentPage)
        setErrorParam(false)
      } else {
        setErrorParam(true)
      }
  }, [category, history.location.search, currentPage, history])

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
            <Pagination
              totalPages={data?.total_pages}
              currentPage={currentPage}
            />
          </Container>
        </main>
      )}
      {errorParam && <ErrorComponent />}
    </>
  )
}

export default DisplayMovies
