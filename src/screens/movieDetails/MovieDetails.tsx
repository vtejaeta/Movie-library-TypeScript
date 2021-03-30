import { RouteComponentProps } from "react-router";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { state } from "../../redux-part/exports";
import { useHistory } from "react-router-dom";
import "../../assets/css/MovieDetails.css";
import SkeletonArticle from "../../components/layout/skeletons/SkeletonArticle";
import SkeletonElement from "../../components/layout/skeletons/SkeletonElement";
import noImage from "../../assets/images/no-photo-available-icon-8.jpg";

interface MatchParam {
  id?: string;
}

const MovieDetails: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {
  const { id } = match.params;

  const { searchMoviesById } = useActions();
  const history = useHistory();

  let { loading, error, data } = useTypedSelector(
    (state): state.MovieDetailsState => state.moviesById
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Number(id) > 0 && !Number.isNaN(id)
      ? searchMoviesById(Number(id))
      : history.push("/browse/error");
  }, []);

  const getRunTime = (time: number) => {
    return `${Math.floor(time / 60) ? `${Math.floor(time / 60)}h` : ""} ${
      Math.floor(time % 60) ? `${Math.floor(time % 60)}m` : ""
    }`;
  };

  const printGenres = (genres: { id: number; name: string }[]) => {
    const lastIndex = genres.length - 1;
    return genres.map((genre, index) => {
      return index !== lastIndex ? `${genre.name}, ` : `${genre.name}`;
    });
  };

  const goBack = () => {
    history.goBack();
  };

  const renderTextDetailsOfMovie = () => {
    if (data) {
      return (
        <>
          <button className="mb-4 back-btn mt-4" onClick={() => goBack()}>
            {" "}
            Go Back
          </button>
          <h1 className="text-capitalize mb-4">{`${data.original_title} ${
            data.release_date.slice(0, 4)
              ? `(${data.release_date.slice(0, 4)})`
              : ""
          }`}</h1>
          <p className="font-weight-bold font-xl mb-2">
            Runtime: {data.runtime ? getRunTime(data.runtime) : `NA`}
          </p>
          <p className="font-weight-bold font-xl mb-2">
            Genres: {data.genres.length ? printGenres(data.genres) : "NA"}
          </p>
          <p className="font-xl mt-5">{data.overview}</p>
          {data.videos.results.length ? (
            <a
              href={`https://www.youtube.com/watch?v=${data.videos.results[0].key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="page-btn mt-4">
                <span>View Trailer</span>
              </button>
            </a>
          ) : (
            <></>
          )}
        </>
      );
    }
  };

  const renderMovieImage = () => {
    if (data) {
      return (
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : noImage
          }
          alt={data.original_title}
          className="single-movie-poster"
        />
      );
    }
  };

  return (
    <>
      {loading && (
        <div className="single-movie-card">
          <section className="left-card">
            <SkeletonElement type="image" />
          </section>
          <section className="right-card">
            <SkeletonArticle />
          </section>
        </div>
      )}
      {!loading && (
        <div className="single-movie-card">
          <section className="left-card">{renderMovieImage()}</section>
          <section className="right-card">{renderTextDetailsOfMovie()}</section>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
