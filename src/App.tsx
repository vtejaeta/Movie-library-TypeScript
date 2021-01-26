import { Provider } from 'react-redux'
import { store } from './redux-part/exports'
import MoviesList from './components/MoviesList'

const App = () => {
  return (
    <Provider store={store}>
      <h1>Navbar</h1>
      <h1>Carousel</h1>
      <MoviesList/>
    </Provider>
  )
}

export default App
