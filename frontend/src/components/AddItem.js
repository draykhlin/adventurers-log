import { useState } from 'react'

const AddItem = ({ onAdd }) => {
   const [name, setName] = useState('')
   const [qty, setQty] = useState(1)
   const [notes, setNotes] = useState('')
   // const [error, setError] = useState(null)

   const handleSubmit = async (e) => {
      e.preventDefault()

      const item = { name, qty, notes }

      const res = await fetch('/api/inventory', {
         method: 'POST',
         body: JSON.stringify(item),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      const json = await res.json()

      // if (!res.ok) {
      //    setError(json.error)
      // }
      if (res.ok) {
         onAdd({ name, qty })
         
         setName('')
         setQty(1)
         setNotes('')
         // setError(null)
         console.log('New item added', json)
      }
   }

   return (
      <form className="inventory-form" onSubmit={handleSubmit}>
         <h3>Add a new item</h3>

         <label>Item:
            <input
               type="text"
               onChange={(e) => setName(e.target.value)}
               value={name}
            />
         </label>

         <label>Quantity:
            <input
               type="number"
               onChange={(e) => setQty(e.target.value)}
               value={qty}
            />
         </label>

         <label>Notes:
            <textarea
               name="notes"
               onChange={(e) => setNotes(e.target.value)}
               value={notes}
            />
         </label>

         <button>Add Item</button>
         {/* {error && <div className="error">{error}</div>} */}
      </form>
   )
}

export default AddItem