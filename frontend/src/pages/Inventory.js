import { useEffect, useState } from 'react'

// components
import AddItem from '../components/AddItem'
import Item from '../components/Item'

const Inventory = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('/api/inventory')
      const json = await res.json()

      if (res.ok) {
        setItems(json)
        console.log(json)
      }
    }

    fetchInventory()
  }, [items.length])

  // useEffect(() => {
  //   const getInventory = async () => {
  //     const inventoryFromServer = await fetchInventory()
  //     setItems(inventoryFromServer)
  //   }
  //   getInventory()
  // }, [])

  // // Fetch inventory items
  // const fetchInventory = async () => {
  //   const res = await fetch('/api/inventory')
  //   const data = await res.json()

  //   return data
  // }
  
  // Add item
  const addItem = (item) => {
    setItems([...items, item])
  }

  // Delete item
  const deleteItem = async (id) => {
    await fetch(`/api/inventory/${id}`, {
      method: 'DELETE'
    })

    await setItems(items.filter((item) => item._id !== id))
  }

  return (
    <div className="container">
      <AddItem onAdd={addItem} />

      <ul className="inventoryList">
        {items && items.map((item) => 
          <Item key={item._id} keyId={item._id} item={item} onDelete={deleteItem} />
        )}
      </ul>

      {/* <Items items={items} onDelete={deleteItem} /> */}
    </div>
   )
 }

 export default Inventory