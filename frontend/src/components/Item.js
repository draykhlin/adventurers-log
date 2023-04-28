import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Item = ({ keyId, item, onDelete, updateItem }) => {
   const [qty, setQty] = useState(item.qty)
   const [savedQty, setSavedQty] = useState(item.qty)
   
   const [notes, setNotes] = useState(item.notes)
   const [savedNotes, setSavedNotes] = useState(item.notes)

   const [editing, setEditing] = useState(false)

   const handleQtyChange = async (e) => {
      const newQty = parseInt(e.target.value)
      setQty(newQty)
   }

   const handleNotesChange = async (e) => {
      const newNotes = e.target.value
      setNotes(newNotes)
   }

   const handleSaveClick = async () => {
      setEditing(false)

      const updatedItem = {...item, qty: qty, notes: notes}
     
      await fetch(`/api/inventory/${item._id}`, {
         method: 'PATCH',
         body: JSON.stringify({
            qty: parseInt(qty),
            notes: notes
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      })         

      await updateItem(updatedItem)
   }

   const handleEditClick = () => {
      setSavedQty(qty)
      setSavedNotes(notes)
      setEditing(true)
   }

   const handleCancelClick = () => {
      setQty(savedQty)
      setSavedNotes(savedNotes)
      setEditing(false)
   }
   return (
      <li className="inventoryItem">
         {editing ? 
            <div>
               <span>{item.name}</span><br></br>

               <input
                  type="number"        
                  value={qty} 
                  onChange={handleQtyChange}   
               />

               <textarea
                  value={notes} 
                  onChange={handleNotesChange}   
               /> 

               <button onClick={handleSaveClick}>Save</button>
               <button onClick={handleCancelClick}>Cancel</button>
            </div>
            :
            <div>
               <p>{item.name}</p>
               <p>{qty}</p>
               <p>{notes}</p>

               <button onClick={handleEditClick}>Edit</button>
            </div>
         }
                 
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