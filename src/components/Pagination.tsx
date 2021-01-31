import { useState, useEffect } from 'react'

interface PaginationProps {
  totalPages?: number
  currentPage:number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages,currentPage }) => {
  return <h1>{`${totalPages},${currentPage}`}</h1>
}

export default Pagination
