import { useEffect, useState } from 'react'

// components
import InventoryForm from '../components/InventoryForm'
import Items from '../components/Items'

const Inventory = () => {
  const [items, setItems] = useState([])
 
  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('/api/inventory')
      const json = await res.json()

      if (res.ok) {
        setItems(json)
      }
    }

    fetchInventory()
  }, [])
  
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">


      <InventoryForm />
      
      <Items items={items} onDelete={deleteItem} />
      
      {/* <Header
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem} />

      {showAddItem && <AddItem onAdd={addItem} />} */}
      {/* {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} />) : (
          'Your inventory is empty'
        )} */}
    </div>
   )
 }

 export default Inventory