import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect,useState } from 'react'
import {state} from '../redux-part/exports'

interface DisplayMoviesProps {
  category: string
}

const DisplayMovies: React.FC<DisplayMoviesProps> = ({ category }) => {
  const [listOfMovies,setListOfMovies] = useState([])
  let { loading, error, data } = useTypedSelector((state):state.MoviesState => {
    if (category === 'top-rated') {
      return state.moviesByTopRated
    }
    return state.moviesByPopular
  })

  useEffect(()=>{
  },[])

  return <h1>{category}</h1>
}

export default DisplayMovies
