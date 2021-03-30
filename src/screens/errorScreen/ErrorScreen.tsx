import { Link } from 'react-router-dom'

const ErrorComponent: React.FC = () => {
  return (
    <section className='error-component'>
      <h1 className='went-wrong my-1'>Oh No!</h1>
      <p className='my-1 p-2'>It looks like something went wrong</p>
      <Link to='/browse/popular/1'>
        <button className='go-home my-1'>Go Home</button>
      </Link>
    </section>
  )
}

export default ErrorComponent
