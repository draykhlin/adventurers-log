

const Inventory = () => {
   const [items, setItems] = useState([])
 
   useEffect(() => {
     fetch('/api/getItems')
       .then(res => res.json())
       .then(({ items }) => {
         setItems(items)
       })
   })
 
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