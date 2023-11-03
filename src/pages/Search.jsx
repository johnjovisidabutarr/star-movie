import axios from 'axios'
import SearchBar from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import Modal from '../components/Modal'

const Search = () => {
  const [movies, setMovies] = useState([])
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const [detail, setDetail] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getMovies = async () => {
    const url = `${
      import.meta.env.VITE_API_URL
    }/search/movie?query=${query}&api_key=${import.meta.env.VITE_API_KEY}`
    const result = await axios.get(url)
    console.log(result)
    setMovies(result.data.results)
  }

  const getDetail = (i) => {
    setDetail(movies[i])
  }

  useEffect(() => {
    getMovies()
  }, [query])

  return (
    <div>
      <SearchBar query={query} />
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6'>
        Search Results for: {query}
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {movies.map((item, i) => (
          <div key={item.id} className='bg-white rounded-lg shadow-md p-4'>
            <LazyLoadImage
              onClick={() => {
                setShowModal(true)
                getDetail(i)
              }}
              src={`${import.meta.env.VITE_API_URL_IMG}/${item.poster_path}`}
              className='w-full h-64 object-cover rounded-xl'
              effect='opacity'
            />
            <p className='text-sm font-semibold mt-2'>
              {item.title || item.name}
            </p>
            <p className='text-gray-500 text-xs'>
              {new Date(
                item.release_date || item.first_air_date
              ).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>

      {showModal ? (
        <Modal
          detail={detail}
          setDetail={setDetail}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  )
}

export default Search
