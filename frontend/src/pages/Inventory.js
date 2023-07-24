import { useEffect, useState } from 'react'

// components
import AddItem from '../components/AddItem'
import Gp from '../components/Gp'
import Item from '../components/Item'

const Inventory = () => {
  const [items, setItems] = useState([])
  const [addItemClicked, setAddItemClicked] = useState(false)

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('https://adventurers-log-server.onrender.com/api/inventory', {
        credentials: "include"
      })
      const json = await res.json()

      if (res.ok) {
        setItems(json)
        // console.log(json)
      }
    }

    fetchInventory()
  }, [items])

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
  
  const cancelItem = () => {
    setAddItemClicked(false)
  }

  const addItem = (item) => {
    setItems([...items, item])
    setAddItemClicked(false)
  }

  const deleteItem = async (id) => {
    await fetch(`https://adventurers-log-server.onrender.com/api/inventory/${id}`, {
      method: 'DELETE',
      credentials: "include"
    })

    await setItems(items.filter((item) => item.id !== id))
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




                {/* <table className="card inventory-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Notes</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                    {items && items.map((item, index) => 
                      <Item
                        key={index}
                        keyId={item._id}
                        item={item}
                        onDelete={deleteItem}
                        updateItem={updateItem}
                        />
                    )}

                  </tbody>
                </table> */}

      {/* <Items items={items} onDelete={deleteItem} /> */}
    </>
   )
 }

 export default Inventory