const Modal = ({ detail, setDetail, setShowModal }) => {
  return (
    <div>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg'>
        <div className='relative w-full my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
              <h3 className='text-2xl font-semibold'>Overview</h3>
            </div>
            <div className='relative p-6'>
              <div className='w-full px-4 space-y-2'>
                <p className='mb-1 text-2xl leading-relaxed font-bold'>
                  {detail.title || detail.name} (
                  {detail.release_date || detail.first_air_date
                    ? new Date(
                        detail.release_date || detail.first_air_date
                      ).toLocaleDateString('en-US', { year: 'numeric' })
                    : 'Loading...'}
                  )
                </p>
                <p>{detail.overview}</p>
              </div>
            </div>
            <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => {
                  setDetail([])
                  setShowModal(false)
                }}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  )
}

export default Modal
