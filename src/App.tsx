import { Suspense, lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import LoadingSpinner from './components/shared/spinner/LoadingSpinner';
import MovieDetails from './screens/movieDetails/MovieDetails';
import SearchAndDisplayMovies from './screens/searchAndDisplayMovies/SearchAndDisplayMovies';


const DisplayOriginalMovies = lazy(
  () => import('./screens/displayMovies/DisplayOriginalMovies')
);
const ErrorScreen = lazy(() => import('./screens/errorScreen/ErrorScreen'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner/>}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/browse/popular/1' />
            </Route>
            <Route exact path='/browse/:category/:page' component={DisplayOriginalMovies} />
            <Route exact path='/search/:term/:page' component={SearchAndDisplayMovies} />
            <Route exact path='/movie/:id' component={MovieDetails} />
            <Route component={ErrorScreen} />
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
