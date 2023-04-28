import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Item = ({ keyId, item, onDelete, updateItem }) => {
   const [qty, setQty] = useState(item.qty)

   const handleInputChange = async (e) => {
     const newQty = parseInt(e.target.value)

     setQty(newQty)

     const updatedItem = {...item, qty: newQty}

     await fetch(`/api/inventory/${item._id}`, {
         method: 'PATCH',
         body: JSON.stringify({
            qty: parseInt(newQty)
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      })

      updateItem(updatedItem)
   }

   return (
      <li className="inventoryItem">
         <span>{item.name}</span><br></br>

         <input
            type="number" 
            name="currentQty"
            value={qty} 
            onChange={handleInputChange}   
         />

         <FaTimes onClick={() => onDelete(item._id)} />
      </li>
   )
}

export default Item  




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