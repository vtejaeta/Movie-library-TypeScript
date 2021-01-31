import { useTypedSelector } from '../hooks/useTypedSelector'
import { useEffect } from 'react'
import { state } from '../redux-part/exports'
import MoviesCarousel from './MoviesCarousel'
import Header from './Header'
import Footer from './Footer'
import LoadingSpinner from './LoadingSpinner'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../styles/DisplayMovies.css'
import { RouteComponentProps } from 'react-router-dom'
import { useActions } from '../hooks/useActions'


// const DisplayMovies: React.FC = () => {
//   const [dataFromApi, setDataFromApi] = useState({})
//   const [listOfMovies, setListOfMovies] = useState<{ [key: string]: any }[]>([])
//   let [category,setCategory] = useState('popular')

  // let { loading, error, data } = useTypedSelector(
  //   (state): state.MoviesState => {
  //     if (category === 'top-rated') {
  //       return state.moviesByTopRated
  //     } else if (category === 'upcoming') {
  //       return state.moviesByUpComing
  //     }
  //     return state.moviesByPopular
  //   }
  // )

//   useEffect(() => {
//     data && setDataFromApi(data)
//     data && setListOfMovies(data.results)
//   }, [data])

//   const renderMovies = () => {
//     return listOfMovies.map((movie) => {
//       return (
//         <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
//           <Card className='my-3'>
//             <LazyLoadImage
//               alt={movie.original_title}
//               src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//             />
//           </Card>
//         </Col>
//       )
//     })
//   }

//   return (
//     <>
//       <Header />
//       {listOfMovies.length ? (
//         <MoviesCarousel topFourMovies={listOfMovies.slice(0, 4)} />
//       ) : (
//         <LoadingSpinner />
//       )}
//       <main>
//         <Container>
//           {loading ? <LoadingSpinner /> : <></>}
//           <h1 className='ml-4 mt-4'>{category.toUpperCase()} Movies</h1>
//           {listOfMovies ? <Row className='p-5'>{renderMovies()}</Row> : <></>}
//         </Container>
//       </main>
//       <Footer />
//     </>
//   )
// }

interface MatchParam {
  category?: string
}

const DisplayMovies: React.FC<RouteComponentProps<MatchParam>> = ({
  match,
}) => {
  const { category } = match.params
  const {
    searchMoviesByPopular,
    searchMoviesByTopRated,
    searchMoviesByUpComing,
  } = useActions()
  let { loading, error, data } = useTypedSelector(
    (state): state.MoviesState => {
      if (category === 'top-rated') {
        return state.moviesByTopRated
      } else if (category === 'upcoming') {
        return state.moviesByUpComing
      }
      return state.moviesByPopular
    }
  )

  useEffect(()=>{
    if(category === 'popular'){
      searchMoviesByPopular(1)
    }else if(category === 'top-rated'){
      searchMoviesByTopRated(1)
    }else if(category === 'upcoming'){
      searchMoviesByUpComing(1)
    }
  },[category])

    const renderMovies = () => {
    return data?.results.map((movie:any) => {
      return (
        <Col sm={12} md={6} lg={4} xl={3} key={Math.random()}>
          <Card className='my-3'>
            <LazyLoadImage
              alt={movie.original_title}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </Card>
        </Col>
      )
    })
  }
  
  return (
    <>
      <Header />
      {data?.results.length ? (
        <MoviesCarousel topFourMovies={data?.results.slice(0, 4)} />
      ) : (
        <LoadingSpinner />
      )}
      <main>
        <Container>
          {loading ? <LoadingSpinner /> : <></>}
          {category ? <h1 className='ml-4 mt-4'>{category.toUpperCase()} Movies</h1>:<></>}
          {data?.results ? <Row className='p-5'>{renderMovies()}</Row> : <></>}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default DisplayMovies
