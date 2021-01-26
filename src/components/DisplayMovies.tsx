import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect,useState } from 'react'

interface DisplayMoviesProps {
  category: string
}

const DisplayMovies: React.FC<DisplayMoviesProps> = ({ category }) => {
  const [listOfMovies,setListOfMovies] = useState([])
  let { loading, error, data } = useTypedSelector((state) => {
    if (category === 'top-rated') {
      return state.moviesByTopRated
    }
    return state.moviesByPopular
  })

  useEffect(()=>{
    setListOfMovies(data.results)
  },[])

  return <h1>{category}</h1>
}

export default DisplayMovies
