import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <NavigationBar />
      <div className='flex-grow px-4 md:px-32'>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout
