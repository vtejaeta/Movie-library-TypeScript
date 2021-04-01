import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { state } from "../../redux-part/exports";
import Pagination from "../../components/shared/pagination/Pagination";
import MoviesGrid from "../../components/layout/moviesGrid/MoviesGrid";
import "../../assets/css/DisplayMovies.css";
import ErrorScreen from '../errorScreen/ErrorScreen'

interface MatchParam {
  term?: string;
  page?: string;
}

const SearchAndDisplayMovies: React.FC<RouteComponentProps<MatchParam>> = ({
  match,
}) => {
  const { term } = match.params;
  const [currentPage, setCurrentPage] = useState(
    Number(match.params.page) || 1
  );
  const [errorParam, setErrorParam] = useState(
    Number(match.params.page) ? false : true
  );

  const { searchMoviesByName } = useActions();

  let { loading, error, data } = useTypedSelector(
    (state): state.MoviesState => state.moviesByName
  );

  useEffect(() => {
      Number(match.params.page) &&
      Number(match.params.page) !== currentPage &&
      setCurrentPage(Number(match.params.page));
    if (
      Number(match.params.page) > 0 &&
      Number(match.params.page) === currentPage
    ) {
      term && searchMoviesByName(term, currentPage);
    }else if (
      Number.isNaN(Number(match.params.page)) ||
      Number(match.params.page) < 0
    ) {
      setErrorParam(true);
    }
  }, [term, match, currentPage]);

  if (errorParam || error) {
    return <ErrorScreen />;
  }

  return (
    <>
      {/* {error && <ErrorScreen />} */}
      {loading && (
        <>
          <main>
            <Container>
              {term && (
                <h3 className="ml-4 mt-4">
                  Movies with name: {term.toUpperCase()}
                </h3>
              )}
              <Row className="p-5">
                <MoviesGrid loadingStatus="loading" category={term} />
              </Row>
            </Container>
          </main>
        </>
      )}
      {data && data.total_pages && data.results.length && (
        <>
          <main>
            <Container>
              {term && (
                <h3 className="ml-4 mt-4">
                  Movies with name: {term.toUpperCase()}
                </h3>
              )}
              <Row className="p-5">
                <MoviesGrid loadingStatus="loaded" category={term} />
              </Row>
              {(!!data.total_pages) && (data.total_pages !== 1) && (
                <Pagination
                  totalPages={data.total_pages}
                  currentPage={currentPage}
                />
              )}
            </Container>
          </main>
        </>
      )}
      {data && (!data.total_pages || !data.results.length) && (
          <section className="error-component">
            <h1 className="went-wrong">Oh No!</h1>
            <p>{[`It looks like there are no movies with `,<strong className="font-weight-bold">{term}</strong>,` name`]}</p>
          </section>
      )}
    </>
  );
};

export default SearchAndDisplayMovies;
