import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { AiFillEdit } from 'react-icons/ai'


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
      <div className="inventory-row">
         <div className="item-cell item-name">
            {item.name}
         </div>
         <div className="item-cell item-qty">
            {editing ?
               <>
               <input
                  type="number"        
                  value={qty} 
                  onChange={handleQtyChange}   
               />
               </>
               :
               <>
               {qty}
               </>
            }
         </div>
         <div className="item-cell item-notes">
            {editing ?
               <>
               <textarea
                  value={notes} 
                  onChange={handleNotesChange}   
               />
               </>
               :
               <>
               {notes}
               </>
            }
         </div>
         {editing ?
            <>
               <div className="item-cell item-controls">
                  <FontAwesomeIcon icon={faCheck} className="icon item-save" onClick={handleSaveClick} />
                  <FontAwesomeIcon icon={faTimes} className="icon item-cancel" onClick={handleCancelClick} />
               </div>
            </>
            :
            <>
               <div className="item-cell item-edit">
                  <FontAwesomeIcon icon={faPen} className="icon" onClick={handleEditClick} />
               </div>
            </>
         }
         <div className="item-cell item-delete">
            <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => onDelete(item._id)} />
         </div>
      </div>
      



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



//////////
   {/* <tr className="inventory-item">
      <>
         {editing ? 
            <>
               <td>
                  <span>{item.name}</span><br></br>
               </td>
               <td>
                  <input
                     type="number"        
                     value={qty} 
                     onChange={handleQtyChange}   
                  />
               </td>
               <td className="inventory-note">
                  <textarea
                     value={notes} 
                     onChange={handleNotesChange}   
                  /> 
               </td>
               <td>
                  <FontAwesomeIcon icon={faCheck} className="icon" onClick={handleSaveClick} />
                  <FontAwesomeIcon icon={faTimes} className="icon" onClick={handleCancelClick} />
               </td>
               <td>
                  <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => onDelete(item._id)} />
               </td>
            </>
            :
            <>
               <td>
                  <p>{item.name}</p>
               </td>
               <td>
                  <p>{qty}</p>
               </td>
               <td className="inventory-note">
                  <p>{notes}</p>
               </td>
               <td>
                  <FontAwesomeIcon icon={faPen} className="icon" onClick={handleEditClick} />
               </td>
               <td>
                  <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => onDelete(item._id)} />
               </td>
            </>
         }
         </>
   </tr> */}
//////////////