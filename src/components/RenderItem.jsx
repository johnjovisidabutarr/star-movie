import Item from './Item'

const RenderItem = (item, i, setShowModal, getDetail) => (
  <div key={item.id} className='flex-shrink-0 w-44'>
    <Item
      key={item.id}
      item={item}
      onClick={() => {
        setShowModal(true)
        getDetail(i)
      }}
    />
  </div>
)

export default RenderItem
