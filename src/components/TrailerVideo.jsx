import axios from 'axios'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { FaPlay } from 'react-icons/fa'

const TrailerVideo = ({ id, backdrop_path, original_title }) => {
  const [videoTrailer, setVideoTrailer] = useState([])
  const [showModal, setShowModal] = useState(false)

  const video = async () => {
    const url = `${import.meta.env.VITE_API_URL}/movie/${id}/videos?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
    const result = await axios.get(url)
    setVideoTrailer(result.data.results[result.data.results.length - 1])
  }

  useEffect(() => {
    video()
  }, [])

  return (
    <>
      <div
        className='relative group cursor-pointer hover:opacity-90 transition-transform transform hover:scale-105'
        onClick={() => setShowModal(true)}>
        <LazyLoadImage
          className='w-full h-fit object-cover rounded-xl'
          src={`${import.meta.env.VITE_API_URL_IMG}/${backdrop_path}`}
          effect='blur'
          alt='Loading'
        />
        <div className='absolute inset-0 flex items-center justify-center transition-opacity hover:scale-110'>
          <FaPlay className='mb-4 text-4xl text-white' />
        </div>
        <p className='text-sm font-bold'>{original_title}</p>
      </div>

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg'>
            <div className='relative w-full sm:w-3/4 md:w-1/2 lg:w-2/5 my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-3xl text-white font-semibold'>Trailer</h3>
                </div>
                <div className='relative p-52 flex-auto'>
                  <iframe
                    title={original_title}
                    width='560'
                    height='315'
                    src={`https://www.youtube.com/embed/${videoTrailer.key}`}
                    allowFullScreen
                    className='absolute inset-0 w-full h-full'></iframe>
                </div>

                <div className='flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default TrailerVideo
