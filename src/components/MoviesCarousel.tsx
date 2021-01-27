import '../styles/MoviesCarousel.css'
import { Carousel, Image } from 'react-bootstrap'

interface TopFourMovies {
  topFourMovies: { [key: string]: any }[]
}

const MoviesCarousel: React.FC<TopFourMovies> = ({ topFourMovies }) => {
  const renderCarousel = () => {
    return (
      <Carousel className='bg-dark'>
        {topFourMovies.map((movie) => {
          return (
            <Carousel.Item key={movie.id}>
              <Image
                alt={movie.original_title}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
  return <header>{renderCarousel()}</header>
}

export default MoviesCarousel
