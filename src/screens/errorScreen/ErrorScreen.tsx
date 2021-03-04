import { Link } from 'react-router-dom'

const ErrorComponent: React.FC = () => {
  return (
    <section className='error-component'>
      <h1 className='went-wrong'>Oh No!</h1>
      <p>It looks like something went wrong</p>
      <Link to='/browse/popular/1'>
        <button className='go-home'>Go Home</button>
      </Link>
    </section>
  )
}

export default ErrorComponent
