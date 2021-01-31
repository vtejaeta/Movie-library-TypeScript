import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import DisplayMovies from './components/DisplayMovies'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/browse/popular' />
          </Route>
          <Route path='/browse/:category' component={DisplayMovies} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
