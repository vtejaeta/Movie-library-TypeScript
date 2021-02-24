import { useEffect, useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import ErrorScreen from '../errorScreen/ErrorScreen'
import MoviesCarousel from '../../components/layout/carousel/MoviesCarousel'
import LoadingSpinner from '../../components/shared/spinner/LoadingSpinner'
import Pagination from '../../components/shared/pagination/Pagination'
import '../../assets/css/DisplayMovies.css'
import useAccessMoviesData from '../../hooks/useAccessMoviesData'
import MoviesGrid from '../../components/layout/moviesGrid/MoviesGrid'

interface MatchParam {
  category?: string
}

const DisplayOriginalMovies: React.FC<RouteComponentProps<MatchParam>> = ({
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

  let { loading, error, data } = useAccessMoviesData(category)

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

  // const renderMovies = () => {
  //   return data?.results.map((movie: any) => {
  //     return (
  //       <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
  //         <Card className='my-3'>
  //           <LazyLoadImage
  //             alt={movie.original_title}
  //             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  //           />
  //         </Card>
  //       </Col>
  //     )
  //   })
  // }

  return (
    <>
      {(errorParam || error) && <ErrorScreen />}
      {!error && !data && !loading && <LoadingSpinner />}
      {loading && (
        <>
          <MoviesCarousel loadingStatus={'loading'} />
          <main>
            <Container>
              {category && (
                <h1 className='ml-4 mt-4'>{category.toUpperCase()} Movies</h1>
              )}
              <Row className='p-5'>
                <MoviesGrid loadingStatus='loading' category={category} />
              </Row>
              <Pagination
                totalPages={data?.total_pages}
                currentPage={currentPage}
              />
            </Container>
          </main>
        </>
      )}
      {!error && !loading && data && (
        <>
          <MoviesCarousel
            topFourMovies={data?.results.slice(0, 4)}
            loadingStatus={'loaded'}
          />
          <main>
            <Container>
              {category && (
                <h1 className='ml-4 mt-4'>{category.toUpperCase()} Movies</h1>
              )}
              <Row className='p-5'>
                <MoviesGrid loadingStatus='loaded' category={category} />
              </Row>
              <Pagination
                totalPages={data?.total_pages}
                currentPage={currentPage}
              />
            </Container>
          </main>
        </>
      )}
    </>
  )
}

export default DisplayOriginalMovies
