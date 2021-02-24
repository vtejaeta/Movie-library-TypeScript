import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import DisplayOriginalMovies from './screens/displayMovies/DisplayOriginalMovies'
import ErrorScreen from './screens/errorScreen/ErrorScreen'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/browse/popular' />
          </Route>
          <Route path='/browse/:category' component={DisplayOriginalMovies} />
          <Route component={ErrorScreen} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App