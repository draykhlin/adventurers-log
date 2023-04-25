import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Item = ({ item, onDelete }) => {
   const [newQty, setNewQty] = useState(item.qty)
   
   useEffect(() => {
      
   })

   return (
      <li key={item._id} className="inventoryItem">
         <span>{item.name}</span><br></br>
         {/* <span>Quantity: {item.qty}</span> */}

         <input type="number" value={newQty} onChange={updateQty} />

         <FaTimes onClick={() => onDelete(item._id)} />
      </li>
   )
}

export default Item