import { Card } from 'react-bootstrap'

interface MovieProps {
  movie: { [key: string]: any }
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Card className='my-3'>
      <Card.Img
        variant='top'
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
    </Card>
  )
}

export default MovieCard
