import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Item = ({ item, onClick }) => {
  return (
    <>
      <LazyLoadImage
        onClick={onClick}
        src={`${import.meta.env.VITE_API_URL_IMG}/${item.poster_path}`}
        className='w-full h-64 object-cover rounded-xl cursor-pointer'
        effect='blur'
        width={160}
        alt='Loading'
      />
      <p className='text-sm font-bold'>{item.title || item.name}</p>
      <p className='text-sm text-gray-500'>
        {new Date(item.release_date || item.first_air_date).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }
        )}
      </p>
    </>
  )
}

export default Item
