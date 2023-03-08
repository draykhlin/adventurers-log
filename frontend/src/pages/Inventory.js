import { useEffect, useState } from 'react'

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
 

        // useEffect(() => {
        //   const getTasks = async () => {
        //     const tasksFromServer = await fetchTasks()
        //     setTasks(tasksFromServer)
        //   }

        //   getTasks()
        // }, [])

        // // Fetch Tasks
        // const fetchTasks = async () => {
        //   const res = await fetch('http://localhost:5000/tasks')
        //   const data = await res.json()

        //   return data
        // }



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
       <ul className="inventoryList">
         {items.map((item, index) => 
           <li key={index} className="inventoryItem">
             <span>{item.name}</span>
           </li>
         )}
       </ul>
     </div>
   )
 }

 export default Inventory