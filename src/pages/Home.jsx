import Popular from '../components/Popular'
import Trailer from '../components/Trailer'
import Trending from '../components/Trending'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className='space-y-6'>
      <SearchBar />
      <Trending />
      <Trailer />
      <Popular />
    </div>
  )
}

export default Home
