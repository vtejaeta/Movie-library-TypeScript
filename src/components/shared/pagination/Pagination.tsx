import { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import '../../../assets/css/Pagination.css'

interface PaginationProps {
  totalPages?: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const history = useHistory()

  const scrollTop = ()=>{
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  useEffect(() => {
    if (totalPages !== undefined) {
      if (!currentPage || currentPage > totalPages) {
        history.push('/browse/error')
      }
    }
  }, [currentPage, history,totalPages])

  return (
    <>
      {currentPage === 1 ? (
        <section className='page-container single-btn' onClick={scrollTop}>
          <Link to={'2'}>
            <button className='page-btn float-right'>Page 2</button>
          </Link>
        </section>
      ) : currentPage === totalPages ? (
        <section className='page-container single-btn'  onClick={scrollTop}>
          <Link to={`${currentPage - 1}`}>
            <button className='page-btn float-left'>
              Page {totalPages - 1}
            </button>
          </Link>
        </section>
      ) : (
        <section className='page-container d-flex justify-content-between'  onClick={scrollTop}>
          <Link to={`${currentPage - 1}`}>
            <button className='page-btn'>Page {currentPage - 1}</button>
          </Link>
          <Link to={`${currentPage + 1}`}>
            <button className='page-btn'>Page {currentPage + 1}</button>
          </Link>
        </section>
      )}
    </>
  )
}

export default Pagination
