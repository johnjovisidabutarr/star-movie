import axios from 'axios'
import { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import Modal from './Modal'
import ToggleButton from './ToggleButton'
import RenderItem from './RenderItem'

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [popularSeries, setPopularSeries] = useState([])
  const [movTv, setMovTv] = useState(true)
  const [detail, setDetail] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getDetail = (i) => {
    movTv ? setDetail(popularMovies[i]) : setDetail(popularSeries[i])
  }

  const getPopularData = async (url, setData) => {
    const result = await axios.get(url)
    const popular = result.data.results
    setData == setPopularMovies ? setData(popular.reverse()) : setData(popular)
  }

  useEffect(() => {
    getPopularData(
      `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`,
      setPopularMovies
    )

    getPopularData(
      `${import.meta.env.VITE_API_URL}/tv/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`,
      setPopularSeries
    )
  }, [])

  return (
    <div>
      <ToggleButton movTv={movTv} setMovTv={setMovTv} />
      <div className='w-full overflow-x-auto'>
        <div className='flex py-4'>
          {movTv
            ? popularMovies.map((item, i) =>
                RenderItem(item, i, setShowModal, getDetail)
              )
            : popularSeries.map((item, i) =>
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

export default Popular
