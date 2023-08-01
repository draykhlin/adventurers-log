import { useState } from 'react'

const AddItem = ({ onAdd, onCancel }) => {
   const [name, setName] = useState('')
   const [qty, setQty] = useState(1)
   const [notes, setNotes] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()

      const item = { name, qty, notes }

      const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/inventory', {
         method: 'POST',
         body: JSON.stringify(item),
         headers: {
            'Content-Type': 'application/json'
         },
         credentials: "include"
      })
      const json = await res.json()
      
      if (res.ok) {
         // onAdd({ name, qty, notes })
         onAdd(json)
         
         setName('')
         setQty(1)
         setNotes('')
         console.log('New item added', json)
      }
   }

   const handleCancel = () => {
      setName('')
      setQty(1)
      setNotes('')
   }

   return (
      <form className="card inventory-form" onSubmit={handleSubmit}>
         <h3>Add a new item</h3>

         <label>Item
            <input
               type="text"
               onChange={(e) => setName(e.target.value)}
               value={name}
            />
         </label>

         <label>Quantity
            <input
               type="number"
               onChange={(e) => setQty(e.target.value)}
               value={qty}
            />
         </label>

         <label>Notes
            <textarea
               name="notes"
               onChange={(e) => setNotes(e.target.value)}
               value={notes}
            />
         </label>

         <div className="submit-container">
            <button className="add-button">Add</button>
            <button className="cancel-btn" onClick={onCancel}>Cancel</button>
         </div>
      </form>
   )
}

export default AddItem