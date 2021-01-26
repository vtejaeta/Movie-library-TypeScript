import MoviesListByPopular from './components/MoviesListByPopular'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import MoviesListByTopRated from './components/MoviesListByTopRated'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/browse/popular' />
          </Route>
          <Route path='/browse/popular' component={MoviesListByPopular} />
          <Route path='/browse/top-rated' component={MoviesListByTopRated} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
