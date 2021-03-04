import { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'

// import DisplayOriginalMovies from './screens/displayMovies/DisplayOriginalMovies'
// import ErrorScreen from './screens/errorScreen/ErrorScreen'

const DisplayOriginalMovies = lazy(
  () => import('./screens/displayMovies/DisplayOriginalMovies')
)
const ErrorScreen = lazy(() => import('./screens/errorScreen/ErrorScreen'))

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/browse/popular/1' />
            </Route>
            <Route path='/browse/:category/:page' component={DisplayOriginalMovies} />
            <Route component={ErrorScreen} />
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
