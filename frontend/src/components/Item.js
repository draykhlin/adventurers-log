import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Item = ({ keyId, items, item, onDelete, onQtyChange }) => {
   // const [newQty, setNewQty] = useState(item.qty)

   const handleInputChange = async (itemId, newQty) => {
      const updatedInventory = items.map(item => {
         if (item._id === itemId) {
            return {...item, qty: Number(newQty)}
         }
         return item
      })
      onQtyChange(updatedInventory)
   }
///////////
   // const handleChange = async (e) => {
   //    await setNewQty(e.target.value)

   //    const updatedItem = {keyId, newQty}

   //    await fetch(`/api/inventory/${keyId}`, {
   //       method: 'PATCH',
   //       body: JSON.stringify(updatedItem),
   //       headers: {
   //          'Content-Type': 'application/json'
   //       }
   //    })
   //    console.log(updatedItem)
   // }
//////////
   return (
      <li className="inventoryItem">
         <span>{item.name}</span><br></br>

         <input
            type="number" 
            name="currentQty"
            value={item.qty} 
            onChange={(e) => handleInputChange(item._id, e.target.value)}   
         />

         <FaTimes onClick={() => onDelete(item._id)} />
      </li>
   )
}

export default Item