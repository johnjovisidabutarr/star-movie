const ToggleButton = ({ movTv, setMovTv }) => {
  return (
    <div className='flex space-x-3 items-center'>
      <h3 className='text-3xl font-bold'>POPULAR</h3>
      <div className='border-solid border-2 border-sky-500 rounded-full'>
        <button
          className={`px-5 py-0.5 font-bold rounded-full ${
            movTv ? 'bg-gray-500' : ''
          }`}
          onClick={() => setMovTv(true)}>
          Movie
        </button>
        <button
          className={`px-5 py-0.5 font-bold rounded-full ${
            !movTv ? 'bg-gray-500' : ''
          }`}
          onClick={() => setMovTv(false)}>
          TV Series
        </button>
      </div>
    </div>
  )
}

export default ToggleButton
