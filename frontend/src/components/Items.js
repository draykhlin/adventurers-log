import Item from './Item'

const Items = ({ items, onDelete }) => {
   return (
      <ul className="inventoryList">
        {items && items.map((item) => 
          <Item key={item._id} item={item} onDelete={onDelete} />
          
          // <li key={index} className="inventoryItem">
          //   <span>{item.name}</span>
          //   <FaTimes />
          // </li>
        )}
      </ul>
      // <>
      // {items.map((item, index) => {
      //    <Item
      //       key={index}
      //       item={item}
      //    />
      // })}
      // </>
   )
}

export default Items