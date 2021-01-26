import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect,useState } from 'react'
import {state} from '../redux-part/exports'

interface DisplayMoviesProps {
  category: string
}

const DisplayMovies: React.FC<DisplayMoviesProps> = ({ category }) => {
  const [dataFromApi,setDataFromApi] = useState({})
  const [listOfMovies,setListOfMovies] = useState<{}[]>([])
  let { loading, error, data } = useTypedSelector((state):state.MoviesState => {
    if (category === 'top-rated') {
      return state.moviesByTopRated
    }
    return state.moviesByPopular
  })

  useEffect(()=>{
    setDataFromApi(data)
    Object.keys(dataFromApi).length && setListOfMovies(dataFromApi?.results)
  },[data])

  console.log({dataFromApi,loading,error})

  return <h1>{category}</h1>
}

export default DisplayMovies
