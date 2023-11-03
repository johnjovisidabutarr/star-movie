import axios from 'axios'
import { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import Modal from './Modal'
import RenderItem from './RenderItem'

const Trending = () => {
  const [trending, setTrending] = useState([])
  const [detail, setDetail] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getTrending()
  }, [])

  const getTrending = async () => {
    const url = `${import.meta.env.VITE_API_URL}/trending/all/day?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
    const result = await axios.get(url)
    setTrending(result.data.results)
  }

  const getDetail = async (i) => {
    setDetail(trending[i])
  }

  return (
    <div>
      <h3 className='text-3xl font-bold'>TRENDING</h3>
      <div className='w-full overflow-x-auto'>
        <div className='flex py-4'>
          {trending.map((item, i) =>
            RenderItem(item, i, setShowModal, getDetail)
          )}
        </div>
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

export default Trending
