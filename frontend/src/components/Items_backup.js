import Item from './Item'

const Items = ({ items, onDelete }) => {
   return (
      <ul className="inventoryList">
        {items && items.map((item) => 
          <Item key={item._id} item={item} onDelete={onDelete} />
        )}
      </ul>
   )
}

export default Items