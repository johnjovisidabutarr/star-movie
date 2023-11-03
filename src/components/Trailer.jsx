import axios from 'axios'
import { useEffect, useState } from 'react'
import TrailerVideo from './TrailerVideo'

const Trailer = () => {
  const [nowplaying, setNowPlaying] = useState([])

  const getNowPlaying = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    )
    setNowPlaying(result.data.results)
  }

  useEffect(() => {
    getNowPlaying()
  }, [])

  return (
    <div className='pb-5'>
      <h3 className='text-3xl font-bold'>TRAILERS</h3>

      <div className='w-full overflow-x-auto'>
        <div className='flex space-x-4 py-4'>
          {nowplaying.length > 0
            ? nowplaying.map((item) => (
                <div key={item.id} className='flex-shrink-0 w-64'>
                  <TrailerVideo
                    id={item.id}
                    backdrop_path={item.backdrop_path}
                    original_title={item.original_title}
                  />
                </div>
              ))
            : 'Loading'}
        </div>
      </div>
    </div>
  )
}

export default Trailer
