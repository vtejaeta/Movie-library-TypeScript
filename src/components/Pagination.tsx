import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Pagination.css'

interface PaginationProps {
  totalPages?: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const history = useHistory()

  useEffect(() => {
    if (!currentPage) {
      history.push('/browse/error')
    }
  }, [currentPage, history])

  return (
    <>
      {currentPage == 1 ? (
        <section className='page-container single-btn'>
          <button className='page-btn float-right'>Page 2</button>
        </section>
      ) : currentPage == totalPages ? (
        <section className='page-container single-btn'>
          <button className='page-btn float-left'>
            Page {totalPages - 1}
          </button>
        </section>
      ) : (
        <section className='page-container d-flex justify-content-between'>
          <button className='page-btn'>Page {currentPage - 1}</button>
          <button className='page-btn'>Page {currentPage + 1}</button>
        </section>
      )}
    </>
  )
}

export default Pagination
