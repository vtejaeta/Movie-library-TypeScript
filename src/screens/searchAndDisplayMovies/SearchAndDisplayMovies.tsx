import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { state } from "../../redux-part/exports";
import Pagination from "../../components/shared/pagination/Pagination";
import MoviesGrid from "../../components/layout/moviesGrid/MoviesGrid";
import "../../assets/css/DisplayMovies.css";

interface MatchParam {
  term?: string;
  page?: string;
}

const SearchAndDisplayMovies: React.FC<RouteComponentProps<MatchParam>> = ({
  match,
}) => {
  const { term } = match.params;
  const [currentPage, setCurrentPage] = useState(
    match.params.page && Number(match.params.page)
      ? Number(match.params.page)
      : 1
  );

  const { searchMoviesByName } = useActions();

  let { loading, error, data } = useTypedSelector(
    (state): state.MoviesState => state.moviesByName
  );

  useEffect(() => {
    match.params.page &&
      Number(match.params.page) &&
      !Number.isNaN(Number(match.params.page)) &&
      Number(match.params.page) !== currentPage &&
      setCurrentPage(Number(match.params.page));
    if (
      match.params.page &&
      !Number.isNaN(Number(match.params.page)) &&
      Number(match.params.page) === currentPage
    ) {
      term && searchMoviesByName(term, currentPage);
    }
  }, [term, match, currentPage]);

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
              <Pagination
                totalPages={data?.total_pages}
                currentPage={currentPage}
              />
            </Container>
          </main>
        </>
      )}
      {Boolean(!error && !loading && data && data.total_pages && data.results.length) && !!data && (
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
      {!error && !loading && data && (!data.total_pages || !data.results.length) && (
          <section className="error-component">
            <h1 className="went-wrong">Oh No!</h1>
            <p>{[`It looks like there are no movies with `,<strong className="font-weight-bold">{term}</strong>,` name`]}</p>
          </section>
      )}
    </>
  );
};

export default SearchAndDisplayMovies;
