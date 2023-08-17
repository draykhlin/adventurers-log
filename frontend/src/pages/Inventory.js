import { useEffect, useState } from 'react'

import AddItem from '../components/AddItem'
import Gp from '../components/Gp'
import Item from '../components/Item'

const Inventory = () => {
  const [items, setItems] = useState([])
  const [addItemClicked, setAddItemClicked] = useState(false)

  useEffect(() => {
    fetchInventory()
  }, [])

  const fetchInventory = async () => {
    const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/inventory', {
      credentials: "include"
    })
    const json = await res.json()

    if (res.ok) {
      setItems(json)
    }
  }

  // adding item
    const cancelItem = () => {
      setAddItemClicked(false)
    }

    const addItem = (item) => {
      setItems([...items, item])
      setAddItemClicked(false)
    }

  const deleteItem = async (id) => {
    try {
      await fetch(`https://adventurers-log-server-bw9t.onrender.com/api/inventory/${id}`, {
      method: 'DELETE',
      credentials: "include"
      })
      // setItems((prevItems) => prevItems.filter((item) => item.id !== id))
      fetchInventory()
    } catch (err) {
      console.error(err)
    }
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


  return (
    <>
      {addItemClicked ?
        <AddItem onAdd={addItem} onCancel={cancelItem} />
      :
        <button className="add-item-btn" onClick={(e) => setAddItemClicked(true)}>Add new item</button>
      }
      
      <Gp />

      <div className="card inventory-table">
        <h3>Inventory</h3>
        <div className="inventory-row inventory-header">
          <div className="item-cell">
            Item
          </div>
          <div className="item-cell">
            Quantity 
          </div>
          <div className="item-cell notes-header">
            Notes
          </div>
        </div>
        {items && items.map((item, index) => 
          <Item
            key={index}
            keyId={item._id}
            item={item}
            onDelete={deleteItem}
            updateItem={updateItem}
            />
        )}
      </div>
    </>
   )
 }

 export default Inventory