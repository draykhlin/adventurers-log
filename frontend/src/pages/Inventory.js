import { useEffect, useState } from 'react'

// components
import InventoryForm from '../components/InventoryForm'

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
 

  return (
    <div className="container">
      {/* <Header
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem} />

      {showAddItem && <AddItem onAdd={addItem} />} */}
      {/* {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} />) : (
          'Your inventory is empty'
        )} */}

      <InventoryForm />

      <ul className="inventoryList">
        {items && items.map((item, index) => 
          <li key={index} className="inventoryItem">
            <span>{item.name}</span>
          </li>
        )}
      </ul>

    </div>
   )
 }

 export default Inventory