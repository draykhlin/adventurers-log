import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Item = ({ keyId, item, onDelete }) => {
   const [newQty, setNewQty] = useState(item.qty)

   const updateQty = async (e) => {
      await setNewQty(e.target.value)

      const id = e.target._id
      const item = {keyId, newQty}

      console.log(item)

      await fetch(`/api/inventory/${keyId}`, {
         method: 'PATCH',
         body: JSON.stringify(item),
         headers: {
            'Content-Type': 'application/json'
         }
      })

      /// TEST/////

      


      ////////////


   }

   useEffect(() => {

   })

   return (
      <li key={item._id} className="inventoryItem">
         <span>{item.name}</span><br></br>
         {/* <span>Quantity: {item.qty}</span> */}

         <input
            type="number" 
            name="currentQty"
            value={newQty} 
            onChange={updateQty} 
         />

         <FaTimes onClick={() => onDelete(item._id)} />
      </li>
   )
}

export default Item