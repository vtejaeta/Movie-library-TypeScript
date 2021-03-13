import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Col, Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { state } from '../../../redux-part/exports'
import '../../../assets/css/MoviesGrid.css'

interface MoviesGridProps {
  category?: string
  loadingStatus: string
}

const defaultProps: MoviesGridProps = {
  category: 'popular',
  loadingStatus: 'loading',
}

const MoviesGrid: React.FC<MoviesGridProps> = ({ category, loadingStatus }) => {
  let { data } = useTypedSelector(
    (state): state.MoviesState => {
      if (category === 'top-rated') {
        return state.moviesByTopRated
      } else if (category === 'upcoming') {
        return state.moviesByUpComing
      }
      return state.moviesByPopular
    }
  )

  const renderMovies = () => {
    return loadingStatus === 'loading'
      ? Array(20)
          .fill(1)
          .map(() => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
                <Card className={`my-3 ${loadingStatus}`}></Card>
              </Col>
            )
          })
      : data?.results.map((movie: any) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
              <Card className={`my-3 ${loadingStatus}`}>
                <LazyLoadImage
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className={'movie-thumbnail'}
                  height={350}
                  width={230}
                />
              </Card>
            </Col>
          )
        })
  }

  return <>{renderMovies()}</>
}

MoviesGrid.defaultProps = defaultProps

export default MoviesGrid
