import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { Col, Container, Row, Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface MoviesGridProps{
    category:string
}

const MoviesGrid: React.FC<MoviesGridProps> = ({category}) => {

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

    return <></>

    const renderMovies = () => {
        return data?.results.map((movie: any) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
              <Card className='my-3'>
                <LazyLoadImage
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </Card>
            </Col>
          )
        })
      }
}

export default MoviesGrid
