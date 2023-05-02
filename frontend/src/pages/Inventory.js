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

  ////////
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
  ////////////
  
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

  const updateItem = async (updatedItem) => {
    const updatedItems = items.map(item => {
      if (item._id === updatedItem._id) {
        return updatedItem
      } else {
        return item
      }
    })

    setItems(updatedItems)
  }

    // await fetch('/api/inventory', {
    //   method: 'PATCH',
    //   body: JSON.stringify(items),
    //   headers: {
    //      'Content-Type': 'application/json'
    //   }
    // })
  


  return (
    <div className="inventory-container">
      <AddItem onAdd={addItem} />

      <ul className="inventory-list">
        {items && items.map((item, index) => 
          <Item 
            key={index}
            keyId={item._id}
            item={item}
            onDelete={deleteItem}
            updateItem={updateItem}
            />
        )}
      </ul>

      {/* <Items items={items} onDelete={deleteItem} /> */}
    </div>
   )
 }

 export default Inventory