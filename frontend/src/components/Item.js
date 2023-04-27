import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Item = ({ keyId, item, onDelete }) => {
   const [newQty, setNewQty] = useState(item.qty)

   const updateQty = async (e) => {
      await setNewQty(e.target.value)

      const updatedItem = {keyId, newQty}

      await fetch(`/api/inventory/${keyId}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedItem),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      console.log(updatedItem)
   }

   // const updateQty = (e) => {
   //    setNewQty(e.target.value)
   //    // console.log(`new qty is ${newQty}`)
   // }

   // useEffect(() => {
   //    fetch(`/api/inventory/${keyId}`, {
   //       method: 'PATCH',
   //       body: JSON.stringify(newQty),
   //       headers: {
   //          'Content-Type': 'application/json'
   //       }
   //    })

   //    console.log('sent to db')
   //    console.log(item)
   // }, [newQty])

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