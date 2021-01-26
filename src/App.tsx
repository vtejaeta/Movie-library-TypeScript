import MoviesListByPopular from './components/MoviesListByPopular'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/browse/popular' />
          </Route>
          <Route path='/browse/popular' component={MoviesListByPopular} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
