import { Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface MovieProps {
  movie: { [key: string]: any }
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Card className='my-3'>
      <LazyLoadImage
        alt={movie.original_title}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
    </Card>
  )
}

export default MovieCard
