import { FaTimes } from 'react-icons/fa'

const Item = ({ item, onDelete }) => {
   return (
      <li key={item._id} className="inventoryItem">
         <span>{item.name}</span><br></br>
         <span>Quantity: {item.qty}</span>
         <FaTimes onClick={() => onDelete(item._id)} />
      </li>
   )
}

export default Item