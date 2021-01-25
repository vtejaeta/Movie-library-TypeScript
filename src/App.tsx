import { Provider } from 'react-redux'
import { store } from './redux-part/exports'

const App = () => {
  return (
    <Provider store={store}>
      <h1>Navbar</h1>
      <h1>Carousel</h1>
    </Provider>
  )
}

export default App
