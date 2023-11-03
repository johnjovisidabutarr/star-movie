import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ query }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const searchMovie = (e) => {
    e.preventDefault()
    if (search.length > 2) {
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <div>
      <form
        className='relative rounded-full border w-full flex mt-6'
        onSubmit={searchMovie}>
        <input
          type='text'
          className='border rounded-full w-full py-2 ps-5 focus:outline-gray-300 text-gray-500'
          placeholder='Search movie...'
          onChange={(e) => setSearch(e.target.value)}
          defaultValue={query}
        />
        <button className='absolute right-0 top-0 border rounded-full py-2 px-6 text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-black'>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
