import { Col, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../assets/css/MoviesGrid.css";
import useAccessMoviesData from "../../../hooks/useAccessMoviesData";
import noImage from '../../../assets/images/no-photo-available-icon-8.jpg';
import {Link} from 'react-router-dom'


interface MoviesGridProps {
  category?: string;
  loadingStatus: string;
}

const defaultProps: MoviesGridProps = {
  category: "popular",
  loadingStatus: "loading",
};

const MoviesGrid: React.FC<MoviesGridProps> = ({ category, loadingStatus }) => {
  // custom hook to get state of movies from redux
  let { data } = useAccessMoviesData(category);

  const renderMovies = () => {
    return loadingStatus === "loading"
      ? Array(20)
          .fill(1)
          .map(() => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
                <Card className={`my-3 ${loadingStatus}`}></Card>
              </Col>
            );
          })
      : data?.results.map((movie: any) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
              <Link to={`/movie/${movie.id}`}>
                <Card className={`my-3 ${loadingStatus}`}>
                  <LazyLoadImage
                    alt={movie.original_title}
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : noImage}
                    className={"movie-thumbnail"}
                    height={350}
                    width={230}
                  />
                </Card>
              </Link>
            </Col>
          );
        });
  };
  return <>{renderMovies()}</>;
};

MoviesGrid.defaultProps = defaultProps;

export default MoviesGrid;
