import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center mx-auto'>
              <Link to='/' className='text-white text-xl font-bold'>
                STAR MOVIE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavigationBar
